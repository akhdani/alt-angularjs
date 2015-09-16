alt.modules.api = angular.module('alt-api', [])
    .config(['$provide', '$httpProvider', function($provide, $httpProvider){
        // we will be using common request content-type, not using default application/json from angular
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        var transformRequest = null;

        $provide.factory('httpInterceptor', ['$log', '$q', '$window', function($log, $q, $window){
            return {
                request: function(config){
                    transformRequest = transformRequest || config.transformRequest;

                    if(config.headers['Content-Type']){
                        // if send using form urlencoded
                        if(config.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') === 0){
                            var data = [],
                                transform = function(key, value){
                                    if(key == '$$hashKey') return '';
                                    var tmp;

                                    switch(typeof value){
                                        case "string":
                                        case "number":
                                            return key + "=" + encodeURIComponent(value);
                                            break;
                                        case "object":
                                            tmp = [];
                                            for(var i in value) if(value.hasOwnProperty(i)) if(i != '$$hashKey'){
                                                tmp.push(transform(key + "[" + i + "]", value[i]));
                                            }
                                            return tmp.join("&");
                                            break;
                                        case "array":
                                            tmp = [];
                                            for(var i=0; i<value.length; i++){
                                                tmp.push(transform(key + "[" + i + "]", value[i]));
                                            }
                                            return tmp.join("&");
                                            break;
                                        default:
                                            break;
                                    }
                                };

                            for(var key in config.data) if(config.data.hasOwnProperty(key)){
                                if(key != '$$hashKey') data.push(transform(key, config.data[key]));
                            }

                            config.transformRequest = transformRequest;
                            config.data = data.join("&");
                        }else if(config.headers['Content-Type'].indexOf('multipart/form-data') == 0){
                            config.transformRequest = [function(data){
                                var fd = new FormData(),
                                    transform = function(fd, key, value){
                                        if(key == '$$hashKey') return '';

                                        switch(typeof value){
                                            case "string":
                                            case "number":
                                                fd.append(key, value);
                                                break;
                                            case "object":
                                                if(typeof File !== 'undefined' && value instanceof File){
                                                    fd.append(key, value);
                                                }else if(typeof File === 'undefined' && typeof value.name !== 'undefined') {
                                                    fd.append(key, value);
                                                }else{
                                                    for(var i in value) if(value.hasOwnProperty(i)) if(i != '$$hashKey'){
                                                        transform(fd, key + "[" + i + "]", value[i]);
                                                    }
                                                }
                                                break;
                                            case "array":
                                                for(var i=0; i<value.length; i++){
                                                    transform(fd, key + "[" + i + "]", value[i]);
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                    };

                                for(var key in config.data) if(config.data.hasOwnProperty(key)){
                                    if(key != '$$hashKey') transform(fd, key, config.data[key]);
                                }
                                return fd;
                            }];
                            delete config.headers['Content-Type'];
                        }
                    }

                    return config;
                },
                response: function(response){
                    var res = angular.copy(response);

                    if(typeof response.data === 'object'){
                        res.version = response.data.v || 100;
                        res.code = response.data.s || response.data.code || 1;
                        res.status = res.code;
                        res.data = response.data.d || response.data.data || '';
                        res.message = response.data.m || response.data.msg || '';
                        res.time = response.data.t || 0;
                        res.usage = response.data.u || '';
                        res.token = response.data.token || '';

                        if(res.status != 1){
                            if(res.status == '401'){
                                $window.location.href = alt.baseUrl + 'auth/login';
                                return $q.reject(res);
                            }
                            res.message = res.message || 'Gagal terhubung ke server';
                            return $q.reject(res);
                        }
                    }else if(response.config.url.indexOf(alt.serverUrl) === 0 && typeof response.data !== 'object'){
                        res.code = -1;
                        res.status = res.code;
                        res.message = 'Tidak dapat terhubung ke server';
                        if(alt.environment.toLowerCase() == 'development') res.message += '<br/>' + response.data;
                        return $q.reject(res);
                    }

                    return res;
                }
            };
        }]);

        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .factory('$api', ['$http', '$log', '$q', function($http, $log, $q){
        return function(url, pkey, setting){
            url = url || '';
            var tmp = url.split('/');
            pkey = pkey || (tmp[tmp.length-1] + 'id');
            url = (url.indexOf(alt.serverUrl) !== 0 ? alt.serverUrl : '') + url;
            setting = alt.extend({
                success: angular.noop,
                error: angular.noop
            }, setting);
            return {
                url: url,
                pkey: pkey,
                connect: function(url2, data, setting){
                    url2 = url2 || '';
                    url2 = (url2.indexOf('/') !== 0 ? '/' : '') + url2;
                    data = data || {};
                    setting = alt.extend({
                        skipAuthorization: false,
                        ismultipart: false,
                        method: 'POST'
                    }, setting);

                    var deferred = $q.defer();

                    $http({
                        headers: {
                            'Content-Type': setting.ismultipart ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
                        },
                        skipAuthorization: setting.skipAuthorization,
                        method: setting.method,
                        data: data,
                        url: url + url2
                    }).then(function(response){
                        if(setting.success) setting.success(response);
                        deferred.resolve(response);
                    }, function(error){
                        if(setting.error) setting.error(error);
                        deferred.resolve(error);
                    });

                    return deferred.promise;
                },
                count: function(data, setting){
                    return this.connect('count', data, setting);
                },
                list: function(data, setting){
                    return this.connect('list', data, setting);
                },
                retrieve: function(id, data, setting){
                    id = id || '';
                    data = data || {};
                    data[pkey] = id;
                    return this.connect('retrieve', data, setting);
                },
                keyvalues: function(data, setting){
                    return this.connect('keyvalues', data, setting);
                },
                insert: function(data, setting){
                    return this.connect('insert', data, setting);
                },
                update: function(data, setting){
                    return this.connect('update', data, setting);
                },
                remove: function(id, setting){
                    id = id || '';
                    var data = {};
                    data[pkey] = id;
                    return this.connect('delete', data, setting);
                },
                isexist: function(data, setting){
                    return this.connect('is_exist', data, setting);
                }
            }
        };
    }]);

alt.module('alt-api', alt.modules.api);