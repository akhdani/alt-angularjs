var alt=angular.module("Alt",[]);alt.application="alt",alt.environment="production",alt.version="2.0.0",alt.urlArgs="",alt.urlArgs="production"==alt.environment?"_v="+alt.version:"_t="+ +new Date,alt.theme="",alt.requires=[],alt.componentFolder="component",alt.modules={},alt.registry={},alt.extend=function(t,e){return t="undefined"==typeof t||null==t?{}:t,e="undefined"==typeof e||null==e?"[object Array]"===Object.prototype.toString.call(t)?[]:{}:e,angular.forEach(t,function(n,r){switch(n="undefined"==typeof n||null==n?{}:n,typeof n){case"object":e[r]="[object Array]"===Object.prototype.toString.call(n)?e[r]||n:alt.extend(t[r],e[r]);break;default:e[r]="undefined"!=typeof e[r]&&e[r]!=angular.noop?e[r]:n}}),e},alt.config(["$locationProvider","$compileProvider","$controllerProvider","$filterProvider","$logProvider","$provide",function(t,e,n,r,a,o){alt._controller=alt.controller,alt._service=alt.service,alt._factory=alt.factory,alt._value=alt.value,alt._directive=alt.directive,alt._filter=alt.filter,alt._run=alt.run,alt._config=alt.config,alt.controller=function(t,e){return n.register(t,e),this},alt.config=function(t,e){return o.config(t,e),this},alt.constant=function(t,e){return o.constant(t,e),this},alt.service=function(t,e){return o.service(t,e),this},alt.factory=function(t,e){return o.factory(t,e),this},alt.value=function(t,e){return o.value(t,e),this},alt.directive=function(t,n){return e.directive(t,n),this},alt.filter=function(t,e){return r.register(t,e),this},alt.run=function(t){for(var e=angular.element(document.getElementsByTagName("body")[0]).injector(),n=(e.get("$log"),t.slice(0,t.length-1)),r=t[t.length-1],a=0;a<t.length-1;a++)n[a]=e.get(n[a]);return r.apply(null,n),this},alt.providers={$compileProvider:e,$controllerProvider:n,$filterProvider:r,$logProvider:a,$provide:o}}]),alt.module=function(t,e){if(alt.requires.indexOf(t)<=-1){alt.requires.push(t);try{for(var n=e||angular.module(t),r=n._invokeQueue,a=n._runBlocks,o=0;o<r.length;o++){var l=r[o],i=alt.providers[l[0]];i[l[1]].apply(i,l[2])}for(var u=0;u<a.length;u++){for(var s=a[u],c=s.slice(0,s.length-1),d=s[s.length-1],f=angular.element(document.getElementsByTagName("body")[0]).injector(),p=0;p<c.length;p++)c[p]=f.get(c[p]);d.apply(null,c)}}catch(h){}}return alt},alt.directive("altComponent",["$log",function(t){return{templateUrl:function(t,e,n){var r=alt.componentFolder+"/"+e.altComponent+"/",a=r+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=alt.urlArgs?"?"+alt.urlArgs:"");return a},scope:{altComponent:"@",scope:"=",onload:"&?"},controller:["$scope","$timeout","$interval","$attrs","$element",function(t,e,n,r,a){var o=function(){t.onload=t.onload||function(){return angular.noop},t.onload=t.onload();var n=alt.componentFolder+"/"+t.altComponent+"/",a=angular.element(document.getElementsByTagName("body")[0]).injector();require([n+"controller"],function(n){var o=0,l=[];if("function"==typeof n){for(o=0;o<arguments.length;o++)l.push(arguments[o]);l.push(a),n.apply(this,l)}else if("object"==typeof n&&n.length){var i,u="function"==typeof n[n.length-1]?n[n.length-1]:angular.noop,s="function"==typeof n[n.length-1]?n.length-1:n.length;for(o=0;s>o;o++){switch(i=null,n[o]){case"$scope":i=t;break;case"$injector":i=a;break;default:i=a.get(n[o])||null}l.push(i)}u.apply(this,l)}angular.forEach(t.scope,function(e,n){t[n]=e,t["$"+n]=e});var c=function(t,e){return e>3?null:null==t.$parent?null:"object"==typeof t.$parent[r.scope]?t.$parent:c(t.$parent,e+1)},d=c(t,0);null!=d&&(d[r.scope]=t),t.$apply(),e(function(){t.onload()},1e3)})},l=function(){"undefined"!=typeof t.scope&&(window.clearInterval(i),o())},i=window.setInterval(l,100)}]}}]),alt.factory("$uuid",function(){return{create:function(){function t(t){var e=(Math.random().toString(16)+"000000000").substr(2,8);return t?"-"+e.substr(0,4)+"-"+e.substr(4,4):e}return t()+t(!0)+t(!0)+t()},empty:function(){return"00000000-0000-0000-0000-000000000000"}}}),alt.run(["$rootScope","$q","$log",function(t,e,n){t.defaultRouteChanged=function(){var t=e.defer();return t.resolve(),t.promise},t.onRouteChanged=t.defaultRouteChanged,t.alt=alt}]),window.alt=alt,Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){for(var n=e||0,r=this.length;r>n;n++)if(this[n]===t)return n;return-1}),angular.module("ngRoute",[]),alt.modules.api=angular.module("alt-api",[]).config(["$provide","$httpProvider",function(t,e){e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var n=null;t.factory("httpInterceptor",["$log","$q","$window",function(t,e,r){return{request:function(t){if(n=n||t.transformRequest,t.headers["Content-Type"])if(0===t.headers["Content-Type"].indexOf("application/x-www-form-urlencoded")){var e=[],r=function(t,e){if("$$hashKey"==t)return"";var n;switch(typeof e){case"string":case"number":return t+"="+encodeURIComponent(e);case"object":n=[];for(var a in e)e.hasOwnProperty(a)&&"$$hashKey"!=a&&n.push(r(t+"["+a+"]",e[a]));return n.join("&");case"array":n=[];for(var a=0;a<e.length;a++)n.push(r(t+"["+a+"]",e[a]));return n.join("&")}};for(var a in t.data)t.data.hasOwnProperty(a)&&"$$hashKey"!=a&&e.push(r(a,t.data[a]));t.transformRequest=n,t.data=e.join("&")}else 0==t.headers["Content-Type"].indexOf("multipart/form-data")&&(t.transformRequest=[function(e){var n=new FormData,r=function(t,e,n){if("$$hashKey"==e)return"";switch(typeof n){case"string":case"number":t.append(e,n);break;case"object":if("undefined"!=typeof File&&n instanceof File)t.append(e,n);else if("undefined"==typeof File&&"undefined"!=typeof n.name)t.append(e,n);else for(var a in n)n.hasOwnProperty(a)&&"$$hashKey"!=a&&r(t,e+"["+a+"]",n[a]);break;case"array":for(var a=0;a<n.length;a++)r(t,e+"["+a+"]",n[a])}};for(var a in t.data)t.data.hasOwnProperty(a)&&"$$hashKey"!=a&&r(n,a,t.data[a]);return n}],delete t.headers["Content-Type"]);return t},response:function(t){var n=angular.copy(t);if("object"==typeof t.data){if(n.version=t.data.v||100,n.code=t.data.s||t.data.code||1,n.status=n.code,n.data=t.data.d||t.data.data||"",n.message=t.data.m||t.data.msg||"",n.time=t.data.t||0,n.usage=t.data.u||"",n.token=t.data.token||"",1!=n.status)return"401"==n.status?(r.location.href=alt.baseUrl+"auth/login",e.reject(n)):(n.message=n.message||"Gagal terhubung ke server",e.reject(n))}else if(0===t.config.url.indexOf(alt.serverUrl)&&"object"!=typeof t.data)return n.code=-1,n.status=n.code,n.message="Tidak dapat terhubung ke server","development"==alt.environment.toLowerCase()&&(n.message+="<br/>"+t.data),e.reject(n);return n}}}]),e.interceptors.push("httpInterceptor")}]).factory("$api",["$http","$log","$q",function(t,e,n){return function(e,r,a){e=e||"";var o=e.split("/");return r=r||o[o.length-1]+"id",e=(0!==e.indexOf(alt.serverUrl)?alt.serverUrl:"")+e,a=alt.extend({success:function(){return!0},error:function(){return!0}},a),{url:e,pkey:r,config:a,connect:function(r,o,l){r=r||"",r=(0!==r.indexOf("/")?"/":"")+r,o=o||{},l=alt.extend({skipAuthorization:!1,ismultipart:!1,method:"POST"},l);var i={headers:{"Content-Type":l.ismultipart?"multipart/form-data":"application/x-www-form-urlencoded"},skipAuthorization:l.skipAuthorization,method:l.method,data:o,url:e+r},u=n.defer();return a.connect(i)!==!1?t(i).then(function(t){a.success(t,i)!==!1&&u.resolve(t,i)},function(t){a.error(t,i)!==!1&&u.reject(t,i)}):a.error({message:"Tidak dapat terhubung"},i)!==!1&&u.reject({message:"Tidak dapat terhubung"},i),u.promise},count:function(t,e){return this.connect("count",t,e)},list:function(t,e){return this.connect("list",t,e)},retrieve:function(t,e,n){return t=t||"",e=e||{},e[r]=t,this.connect("retrieve",e,n)},keyvalues:function(t,e){return this.connect("keyvalues",t,e)},insert:function(t,e){return this.connect("insert",t,e)},update:function(t,e){return this.connect("update",t,e)},remove:function(t,e){t=t||"";var n={};return n[r]=t,this.connect("delete",n,e)},isexist:function(t,e){return this.connect("is_exist",t,e)}}}}]),alt.module("alt-api",alt.modules.api),alt.modules.auth=angular.module("alt-auth",["angular-jwt"]).factory("$auth",["$log","$window","jwtHelper",function(t,e,n){return store.set(alt.application+"_token",store.get(alt.application+"_token")||""),store.set(alt.application+"_userdata",store.get(alt.application+"_userdata")||{}),{token:"",userdata:{},set_token:function(t){this.token=t,store.set(alt.application+"_token",this.token)},set_userdata:function(t){this.userdata=t,store.set(alt.application+"_userdata",this.userdata)},login:function(t){"string"==typeof t?(this.set_token(t),this.set_userdata(n.decodeToken(this.token))):this.set_userdata(t)},logout:function(){this.token="",this.userdata={},store.set(alt.application+"_token",""),store.set(alt.application+"_userdata",{}),store.set(alt.application+"_filter",""),store.set(alt.application+"_sorting","")},islogin:function(){return""!=this.token?!n.isTokenExpired(this.token):Object.keys(this.userdata).length>0},check:function(t){return 0==t?this.islogin():this.islogin()&&"undefined"!=typeof this.userdata.userlevel&&(parseInt(this.userdata.userlevel)&parseInt(t))>0},set_permission:function(t,n){return n="undefined"!=typeof n?n:!0,this.check(t)?!0:(n&&(e.location.href=alt.baseUrl+"error?code=403"),!1)}}}]).config(["$provide","$httpProvider",function(t,e){t.factory("authHttpInterceptor",["$auth","$log","$q","$window",function(t,e,n,r){return{request:function(e){return 0===e.url.indexOf(alt.serverUrl)&&e.data&&(e.data.token=t.token),e}}}]),e.interceptors.reverse().push("authHttpInterceptor"),e.interceptors.reverse()}]),alt.module("alt-auth",alt.modules.auth),alt.modules["export"]=angular.module("alt-export",[]).factory("$export",["$log",function(t){return{excel:function(t,e){e=e||"download",t+="";var n="data:application/vnd.ms-excel;base64,",r="";r+='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:Name>'+e+"</x:Name><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>"+e+"</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>",r+=t,r+="</body></html>",window.open(n+window.btoa(r),"_blank")},print:function(t,e){t=t||"",e=e||'<link type="text/css" rel="stylesheet" media="all" href="asset/lib/bootstrap2.3.2/bootstrap/css/bootstrap.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/bootstrap-responsive.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/style.css"/>';var n=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");n.document.write(e),n.document.write(t),n.document.close(),n.focus(),n.print(),n.close()}}}]),alt.module("alt-export",alt.modules["export"]),alt.language="id",alt.dictionary=alt.extend({id:{}},alt.dictionary),alt.modules.i18n=angular.module("alt-i18n",[]).factory("$i18n",["$log",function(t){return function(t){return alt.dictionary[alt.language]?alt.dictionary[alt.language][t]||t:t}}]),alt.module("alt-i18n",alt.modules.i18n),alt.menu="",alt.menuFolder=alt.menuFolder||"menu",alt.modules.menu=angular.module("alt-menu",[]).run(["$rootScope",function(t){t.menu=store.get(alt.application+"_menu")||{submenu:""},t.$watch("menu",function(e,n){e!=n&&(store.set(alt.application+"_menu",e),t.menu=e)},!0),t.$on("$routeChangeStart",function(e,n,r){alt.menu=alt.menuFolder+"/"+("viewer"==n.params.altaction?$auth.userdata.usergroupname:"public")+".html",t.menuLocation=alt.menu,t.menu.submenu=""})}]),alt.module("alt-menu",alt.modules.menu),alt.baseUrl="#!/",alt.routeFolder=alt.routeFolder||"route",alt.defaultRoute=alt.defaultRoute||"",alt.modules.route=angular.module("alt-route",["ngRoute"]).config(["$locationProvider","$compileProvider","$routeProvider",function(t,e,n){t.html5Mode(!1),t.hashPrefix("!");var r=/^\s*(https?|ftp|mailto|file|tel|app):|data:image|javascript:|\//;e.urlSanitizationWhitelist&&e.urlSanitizationWhitelist(r),alt.routing=function(){return{templateUrl:function(t){var e=alt.routeFolder+"/"+(t.altmodule?t.altmodule+"/":"")+(t.altcontroller?t.altcontroller+"/":"")+(t.altaction?t.altaction+"/":""),n=e+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=alt.urlArgs?"?"+alt.urlArgs:"");return n},controller:["$scope","$log","$routeParams","$rootScope","$q",function(t,e,n,r,a){var o=r.onRouteChanged(n)||function(){var t=a.defer();return t.resolve(),t.promise},l=alt.routeFolder+"/"+(n.altmodule?n.altmodule+"/":"")+(n.altcontroller?n.altcontroller+"/":"")+(n.altaction?n.altaction+"/":""),i=angular.element(document.getElementsByTagName("body")[0]).injector();o.then(function(){require([l+"controller"],function(e){var n=0,r=[];if("function"==typeof e){for(n=0;n<arguments.length;n++)r.push(arguments[n]);r.push(i),e.apply(this,r)}else if("object"==typeof e&&e.length){var a,o="function"==typeof e[e.length-1]?e[e.length-1]:angular.noop,l="function"==typeof e[e.length-1]?e.length-1:e.length;for(n=0;l>n;n++){switch(a=null,e[n]){case"$scope":a=t;break;case"$injector":a=i;break;default:a=i.get(e[n])||null}r.push(a)}o.apply(this,r)}t.$apply()})})}]}},n.when("/",""!=alt.defaultRoute?{redirectTo:alt.defaultRoute}:alt.routing()),n.when("/:altaction",alt.routing()),n.when("/:altcontroller/:altaction",alt.routing()),n.when("/:altmodule/:altcontroller/:altaction",alt.routing()),n.otherwise({resolve:{redirectCheck:["$location",function(t){-1===t.absUrl().indexOf(alt.baseUrl)&&t.path("/")}]}})}]),alt.module("alt-route",alt.modules.route),alt.socketUrl="",alt.modules.socket=angular.module("alt-socket",[]).provider("socketFactory",[function(){"use strict";var t="socket:";this.$get=["$rootScope","$timeout",function(e,n){var r=function(t,e){return e?function(){var r=arguments;n(function(){e.apply(t,r)},0)}:angular.noop};return function(n){n=n||{};var a=n.ioSocket||io.connect(),o=void 0===n.prefix?t:n.prefix,l=n.scope||e,i=function(t,e){a.on(t,e.__ng=r(a,e))},u=function(t,e){a.once(t,e.__ng=r(a,e))},s={on:i,addListener:i,once:u,emit:function(t,e,n){var o=arguments.length-1,n=arguments[o];return"function"==typeof n&&(n=r(a,n),arguments[o]=n),a.emit.apply(a,arguments)},removeListener:function(t,e){return e&&e.__ng&&(arguments[1]=e.__ng),a.removeListener.apply(a,arguments)},removeAllListeners:function(){return a.removeAllListeners.apply(a,arguments)},disconnect:function(t){return a.disconnect(t)},connect:function(){return a.connect()},forward:function(t,e){t instanceof Array==!1&&(t=[t]),e||(e=l),t.forEach(function(t){var n=o+t,l=r(a,function(){Array.prototype.unshift.call(arguments,n),e.$broadcast.apply(e,arguments)});e.$on("$destroy",function(){a.removeListener(t,l)}),a.on(t,l)})}};return s}}]}]).factory("$socket",["socketFactory",function(t){return t({ioSocket:io.connect(alt.socketUrl||alt.serverUrl)})}]),alt.module("alt-socket",alt.modules.socket),alt.modules.storage=angular.module("alt-storage",[]).factory("$storage",["$log","$q",function(t,e){return function(t,n){n=n||t+"id",store.set(alt.application+"_data",store.get(alt.application+"_data")||{});var r={table:t,pk:n,response:function(t,e){return e=e||0,{status:e,data:0==e?t:null,message:0!=e?t:""}},get:function(){var n=store.get(alt.application+"_data"),a=n[t]||[],o=e.defer();return o.resolve(r.response(a)),o.promise},save:function(n){var a=store.get(alt.application+"_data");a[t]=n,store.set(alt.application+"_data",a);var o=e.defer();return o.resolve(r.response(1)),o.promise},list:function(){return r.get()},search:function(n,a){var o=e.defer();return r.list(t).then(function(t){for(var e=t.data,l={id:-1,data:null},i=0;i<e.length;i++)if(e[i][n]==a){l.id=i,l.data=e[i][n];break}-1==l.id?o.reject(r.response("Data tidak ditemukan",l.id)):o.resolve(r.response(l))}),o.promise},count:function(){var n=e.defer();return r.list(t).then(function(t){var e=t.data,a=e.length;n.resolve(r.response(a))}),n.promise},insert:function(a){var o=e.defer();return r.list(t).then(function(t){var e=t.data;a[n]=parseInt(e[e.length-1]?e[e.length-1][n]||0:0)+1,e.push(a),r.save(e).then(function(){o.resolve(r.response(res))})}),o.promise},retrieve:function(t){var a=e.defer();return r.search(n,t).then(function(t){var e=t.data,n=e.data;a.resolve(r.response(n))},function(t){a.reject(r.response(t))}),a.promise},update:function(t){var a=e.defer();return r.list().then(function(e){var o=e.data;r.search(n,t[n]).then(function(e){var n=e.data;o[n.id]=t,r.save(o).then(function(){a.resolve(r.response(1))})},function(t){a.reject(r.response("Tidak ada data yang diupdate",-1))})}),a.promise},remove:function(t){var a=e.defer();r.list().then(function(t){var e=t.data;r.search(n,newdata[n]).then(function(t){var n=t.data;e.splice(n.id,1),r.save(e).then(function(){a.resolve(r.response(1))})},function(t){a.reject(r.response("Tidak ada data yang dihapus",-1))})})},keyvalues:function(n,a){a=a||"";var o=e.defer();return r.list(t).then(function(t){for(var e=t.data,r={},l=0;l<e.length;l++)r[e[l][n]]=""!=a?e[l][a]:e[l];o.resolve(r)}),o.promise},isexist:function(t,n){var a=e.defer();return r.list().then(function(e){for(var r=e.data,o=0,l=0;l<r.length;l++)o+=r[l][t]==n?1:0;a.resolve(o)}),a.promise}};return r}}]),alt.module("alt-storage",alt.modules.storage),alt.modules.validation=angular.module("alt-validation",[]).factory("$valid",["$log",function(t){return{required:function(t){return 0!==t&&(t=(t||"")+""),""!==t&&"undefined"!=typeof t},regex:function(t,e){return t=(t||"")+"",e.test(t)},email:function(t){return this.regex(t,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)},username:function(t){return t+="",t.toLowerCase().replace(/[^a-z0-9._-]/,"")},number:function(t){return this.regex(t,/^[0-9]+\.?[0-9]*?$/i)},integer:function(t){return this.regex(t,/^[0-9]*$/i)},equals:function(t,e){return t===e},notequals:function(t,e){return t!==e},lessthan:function(t,e){return e>t},lessequalthan:function(t,e){return e>=t},greaterthan:function(t,e){return t>e},greaterequalthan:function(t,e){return e>=t},between:function(t,e,n){return t>=e&&n>=t},date:function(t){return t+="",8==t.length&&moment(t,"YYYYMMDD").isValid()},month:function(t){return t+="",6==t.length&&moment(t,"YYYYMM").isValid()},year:function(t){return t+="",4==t.length&&moment(t,"YYYY").isValid()},time:function(t){return t+="",4==t.length&&moment(t,"HHmm").isValid()}}}]).factory("$validate",["$valid","$log","$injector",function(t,e,n){var r=function(){return{rules:[],messages:[],rule:function(t,e){return this.rules.push(t),this.messages.push(e),this},validate:function(){for(var t=!0,e=[],n=0;n<this.rules.length;n++)this.rules[n]||(t=!1,e.push(this.messages[n]));return{res:t,message:e}},check:function(){var t=this.validate(),e=n.get("$alert");if(!t.res&&e)for(var r=0;r<t.message.length;r++)e.add(t.message[r],e.danger);return t.res}}};for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return r}]),alt.module("alt-validation",alt.modules.route);