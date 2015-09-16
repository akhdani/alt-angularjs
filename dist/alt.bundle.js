Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1}),angular.module("ngRoute",[]);var alt=angular.module("Alt",[]);alt.application="alt",alt.environment="production",alt.version="2.0.0",alt.urlArgs="",alt.urlArgs="production"==alt.environment?"_v="+alt.version:"_t="+ +new Date,alt.theme="",alt.requires=[],alt.modules={},alt.registry={},alt.extend=function(e,t){return e="undefined"==typeof e||null==e?{}:e,t="undefined"==typeof t||null==t?"[object Array]"===Object.prototype.toString.call(e)?[]:{}:t,angular.forEach(e,function(n,r){switch(n="undefined"==typeof n||null==n?{}:n,typeof n){case"object":t[r]="[object Array]"===Object.prototype.toString.call(n)?t[r]||n:alt.extend(e[r],t[r]);break;default:t[r]="undefined"!=typeof t[r]&&t[r]!=angular.noop?t[r]:n}}),t},alt.config(["$locationProvider","$compileProvider","$controllerProvider","$filterProvider","$logProvider","$provide",function(e,t,n,r,a,o){alt._controller=alt.controller,alt._service=alt.service,alt._factory=alt.factory,alt._value=alt.value,alt._directive=alt.directive,alt._filter=alt.filter,alt._run=alt.run,alt._config=alt.config,alt.controller=function(e,t){return n.register(e,t),this},alt.config=function(e,t){return o.config(e,t),this},alt.constant=function(e,t){return o.constant(e,t),this},alt.service=function(e,t){return o.service(e,t),this},alt.factory=function(e,t){return o.factory(e,t),this},alt.value=function(e,t){return o.value(e,t),this},alt.directive=function(e,n){return t.directive(e,n),this},alt.filter=function(e,t){return r.register(e,t),this},alt.run=function(e){for(var t=angular.element(document.getElementsByTagName("body")[0]).injector(),n=(t.get("$log"),e.slice(0,e.length-1)),r=e[e.length-1],a=0;a<e.length-1;a++)n[a]=t.get(n[a]);return r.apply(null,n),this},alt.providers={$compileProvider:t,$controllerProvider:n,$filterProvider:r,$logProvider:a,$provide:o}}]),alt.module=function(e,t){if(alt.requires.indexOf(e)<=-1){alt.requires.push(e);try{for(var n=t||angular.module(e),r=n._invokeQueue,a=n._runBlocks,o=0;o<r.length;o++){var l=r[o],i=alt.providers[l[0]];i[l[1]].apply(i,l[2])}for(var u=0;u<a.length;u++){for(var s=a[u],c=s.slice(0,s.length-1),d=s[s.length-1],f=angular.element(document.getElementsByTagName("body")[0]).injector(),p=0;p<c.length;p++)c[p]=f.get(c[p]);d.apply(null,c)}}catch(m){}}return alt},alt.components={},alt.component=function(e){if("undefined"==typeof e.name)throw Error("Component must have a name!");return"undefined"==typeof alt.components[e.name]&&(e.require=null==e.require?null:e.require||null,e.restrict=null==e.restrict?null:e.restrict||"A",e.replace=null==e.replace?null:e.replace||!1,e.priority=null==e.priority?null:e.priority||null,e.templateUrl=null==e.templateUrl?null:e.templateUrl||null,e.templateUrl=null==e.templateUrl?null:e.templateUrl+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=e.templateUrl&&""!=alt.urlArgs?"?"+alt.urlArgs:""),e.template=null==e.template?null:e.template||null,e.transclude=null==e.transclude?null:"undefined"!=typeof e.transclude?e.transclude:!0,e.scope=null==e.scope?null:"undefined"!=typeof e.scope?e.scope:{},e.controller=null==e.controller?null:e.controller||null,e.compile=null==e.compile?null:e.compile||null,alt.components[e.name]=alt.directive(e.name,["$log","$parse","$timeout",function(t,n,r){return{require:e.require,restrict:e.restrict,replace:e.replace,priority:e.priority,templateUrl:e.templateUrl,template:e.template,transclude:e.transclude,scope:e.scope,controller:e.controller,compile:e.compile,link:function(t,n,r,a){t.$component=e.name,t.$name=r[e.name],t.alt=alt;var o=angular.element(document.getElementsByTagName("body")[0]).injector(),l=0,i=[];if("function"==typeof e.link){for(l=0;l<arguments.length;l++)i.push(arguments[l]);i.push(o),e.link.apply(this,i)}else if("object"==typeof e.link&&e.link.length){var u,s="function"==typeof e.link[e.link.length-1]?e.link[e.link.length-1]:angular.noop,c="function"==typeof e.link[e.link.length-1]?e.link.length-1:e.link.length;for(l=0;c>l;l++){switch(u=null,e.link[l]){case"$scope":u=t;break;case"$element":u=n;break;case"$attrs":u=r;break;case"$controller":u=a;break;case"$injector":u=o;break;default:u=o.get(e.link[l])||null}i.push(u)}s.apply(this,i)}}}}])),alt.components[e.name]},alt.component({name:"onReady",require:"ngInclude",restrict:"A",scope:{onReady:"&"},link:["$scope","$log","$element","$attrs","$rootScope","$controller",function(e,t,n,r,a,o){r.onReady&&e.onReady&&(!r.ngController||r.ngController&&a.controller)&&e.onReady()}]}),alt.factory("$uuid",function(){return{create:function(){function e(e){var t=(Math.random().toString(16)+"000000000").substr(2,8);return e?"-"+t.substr(0,4)+"-"+t.substr(4,4):t}return e()+e(!0)+e(!0)+e()},empty:function(){return"00000000-0000-0000-0000-000000000000"}}}),alt.run(["$rootScope","$q","$log",function(e,t,n){e.defaultRouteChanged=function(){var e=t.defer();return e.resolve(),e.promise},e.onRouteChanged=e.defaultRouteChanged,e.alt=alt}]),window.alt=alt,alt.language="id",alt.dictionary=alt.extend({id:{}},alt.dictionary),alt.modules.i18n=angular.module("alt-i18n",[]).factory("$i18n",["$log",function(e){return function(e){return alt.dictionary[alt.language]?alt.dictionary[alt.language][e]||e:e}}]),alt.module("alt-i18n",alt.modules.i18n),alt.modules["export"]=angular.module("alt-export",[]).factory("$export",["$log",function(e){return{excel:function(e,t){t=t||"download",e+="";var n="data:application/vnd.ms-excel;base64,",r="";r+='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:Name>'+t+"</x:Name><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>"+t+"</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>",r+=e,r+="</body></html>",window.open(n+window.btoa(r),"_blank")},print:function(e,t){e=e||"",t=t||'<link type="text/css" rel="stylesheet" media="all" href="asset/lib/bootstrap2.3.2/bootstrap/css/bootstrap.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/bootstrap-responsive.min.css"/><link type="text/css" rel="stylesheet" media="all" href="asset/css/style.css"/>';var n=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");n.document.write(t),n.document.write(e),n.document.close(),n.focus(),n.print(),n.close()}}}]),alt.module("alt-export",alt.modules["export"]),alt.modules.storage=angular.module("alt-storage",[]).factory("$storage",["$log","$q",function(e,t){return function(e,n){n=n||e+"id",store.set(alt.application+"_data",store.get(alt.application+"_data")||{});var r={table:e,pk:n,response:function(e,t){return t=t||0,{status:t,data:0==t?e:null,message:0!=t?e:""}},get:function(){var n=store.get(alt.application+"_data"),a=n[e]||[],o=t.defer();return o.resolve(r.response(a)),o.promise},save:function(n){var a=store.get(alt.application+"_data");a[e]=n,store.set(alt.application+"_data",a);var o=t.defer();return o.resolve(r.response(1)),o.promise},list:function(){return r.get()},search:function(n,a){var o=t.defer();return r.list(e).then(function(e){for(var t=e.data,l={id:-1,data:null},i=0;i<t.length;i++)if(t[i][n]==a){l.id=i,l.data=t[i][n];break}-1==l.id?o.reject(r.response("Data tidak ditemukan",l.id)):o.resolve(r.response(l))}),o.promise},count:function(){var n=t.defer();return r.list(e).then(function(e){var t=e.data,a=t.length;n.resolve(r.response(a))}),n.promise},insert:function(a){var o=t.defer();return r.list(e).then(function(e){var t=e.data;a[n]=parseInt(t[t.length-1]?t[t.length-1][n]||0:0)+1,t.push(a),r.save(t).then(function(){o.resolve(r.response(res))})}),o.promise},retrieve:function(e){var a=t.defer();return r.search(n,e).then(function(e){var t=e.data,n=t.data;a.resolve(r.response(n))},function(e){a.reject(r.response(e))}),a.promise},update:function(e){var a=t.defer();return r.list().then(function(t){var o=t.data;r.search(n,e[n]).then(function(t){var n=t.data;o[n.id]=e,r.save(o).then(function(){a.resolve(r.response(1))})},function(e){a.reject(r.response("Tidak ada data yang diupdate",-1))})}),a.promise},remove:function(e){var a=t.defer();r.list().then(function(e){var t=e.data;r.search(n,newdata[n]).then(function(e){var n=e.data;t.splice(n.id,1),r.save(t).then(function(){a.resolve(r.response(1))})},function(e){a.reject(r.response("Tidak ada data yang dihapus",-1))})})},keyvalues:function(n,a){a=a||"";var o=t.defer();return r.list(e).then(function(e){for(var t=e.data,r={},l=0;l<t.length;l++)r[t[l][n]]=""!=a?t[l][a]:t[l];o.resolve(r)}),o.promise},isexist:function(e,n){var a=t.defer();return r.list().then(function(t){for(var r=t.data,o=0,l=0;l<r.length;l++)o+=r[l][e]==n?1:0;a.resolve(o)}),a.promise}};return r}}]),alt.module("alt-storage",alt.modules.storage),alt.socketUrl="",alt.modules.socket=angular.module("alt-socket",[]).provider("socketFactory",[function(){"use strict";var e="socket:";this.$get=["$rootScope","$timeout",function(t,n){var r=function(e,t){return t?function(){var r=arguments;n(function(){t.apply(e,r)},0)}:angular.noop};return function(n){n=n||{};var a=n.ioSocket||io.connect(),o=void 0===n.prefix?e:n.prefix,l=n.scope||t,i=function(e,t){a.on(e,t.__ng=r(a,t))},u=function(e,t){a.once(e,t.__ng=r(a,t))},s={on:i,addListener:i,once:u,emit:function(e,t,n){var o=arguments.length-1,n=arguments[o];return"function"==typeof n&&(n=r(a,n),arguments[o]=n),a.emit.apply(a,arguments)},removeListener:function(e,t){return t&&t.__ng&&(arguments[1]=t.__ng),a.removeListener.apply(a,arguments)},removeAllListeners:function(){return a.removeAllListeners.apply(a,arguments)},disconnect:function(e){return a.disconnect(e)},connect:function(){return a.connect()},forward:function(e,t){e instanceof Array==!1&&(e=[e]),t||(t=l),e.forEach(function(e){var n=o+e,l=r(a,function(){Array.prototype.unshift.call(arguments,n),t.$broadcast.apply(t,arguments)});t.$on("$destroy",function(){a.removeListener(e,l)}),a.on(e,l)})}};return s}}]}]).factory("$socket",["socketFactory",function(e){return e({ioSocket:io.connect(alt.socketUrl||alt.serverUrl)})}]),alt.module("alt-socket",alt.modules.socket),alt.baseUrl="#!/",alt.routeFolder=alt.routeFolder||"route",alt.defaultRoute=alt.defaultRoute||"",alt.modules.route=angular.module("alt-route",["ngRoute"]).config(["$locationProvider","$compileProvider","$routeProvider",function(e,t,n){e.html5Mode(!1),e.hashPrefix("!");var r=/^\s*(https?|ftp|mailto|file|tel|app):|data:image|javascript:|\//;t.urlSanitizationWhitelist&&t.urlSanitizationWhitelist(r),alt.routing=function(){var e={};return{template:'<div id="templateView" data-ng-controller="controller" data-ng-include="view"></div>',controller:null,resolve:{load:["$q","$route","$timeout","$log","$window","$rootScope",function(t,n,r,a,o,l){var i=l.onRouteChanged(n.current.params),u=t.defer(),s=n.current.params,c=angular.element(document.getElementsByTagName("body")[0]).scope(),d=(s.altmodule?s.altmodule+"/":"")+(s.altcontroller?s.altcontroller+"/":"")+(s.altaction?s.altaction+"/":"");return delete c.controller,delete c.view,i.then(function(){c.view=alt.routeFolder+"/"+d+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=alt.urlArgs?"?"+alt.urlArgs:""),require([alt.routeFolder+"/"+d+"controller"],function(t){"undefined"==typeof e[d]&&(e[d]=t[t.length-1],t[t.length-1]=function(){for(var n,r=this,a=arguments,o=0;o<t.length;o++)if("$scope"==t[o]){n=arguments[o];break}var l=n.$on("$includeContentLoaded",function(t){e[d].apply(r,a),l()})}),c.controller=t,c.$apply(function(){u.resolve()})},function(e){u.reject(e)})},function(e){u.reject(e)}),u.promise}]}}},n.when("/",""!=alt.defaultRoute?{redirectTo:alt.defaultRoute}:alt.routing()),n.when("/:altaction",alt.routing()),n.when("/:altcontroller/:altaction",alt.routing()),n.when("/:altmodule/:altcontroller/:altaction",alt.routing()),n.otherwise({resolve:{redirectCheck:["$location",function(e){-1===e.absUrl().indexOf(alt.baseUrl)&&e.path("/")}]}})}]),alt.module("alt-route",alt.modules.route),alt.modules.validation=angular.module("alt-validation",[]).factory("$valid",["$log",function(e){return{required:function(e){return 0!==e&&(e=(e||"")+""),""!==e&&"undefined"!=typeof e},regex:function(e,t){return e=(e||"")+"",t.test(e)},email:function(e){return this.regex(e,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)},username:function(e){return e+="",e.toLowerCase().replace(/[^a-z0-9._-]/,"")},number:function(e){return this.regex(e,/^[0-9]+\.?[0-9]*?$/i)},integer:function(e){return this.regex(e,/^[0-9]*$/i)},equals:function(e,t){return e===t},notequals:function(e,t){return e!==t},lessthan:function(e,t){return t>e},lessequalthan:function(e,t){return t>=e},greaterthan:function(e,t){return e>t},greaterequalthan:function(e,t){return t>=e},between:function(e,t,n){return e>=t&&n>=e},date:function(e){return e+="",8==e.length&&moment(e,"YYYYMMDD").isValid()},month:function(e){return e+="",6==e.length&&moment(e,"YYYYMM").isValid()},year:function(e){return e+="",4==e.length&&moment(e,"YYYY").isValid()},time:function(e){return e+="",4==e.length&&moment(e,"HHmm").isValid()}}}]).factory("$validate",["$valid","$log","$injector",function(e,t,n){var r=function(){return{rules:[],messages:[],rule:function(e,t){return this.rules.push(e),this.messages.push(t),this},validate:function(){for(var e=!0,t=[],n=0;n<this.rules.length;n++)this.rules[n]||(e=!1,t.push(this.messages[n]));return{res:e,message:t}},check:function(){var e=this.validate(),t=n.get("$alert");if(!e.res&&t)for(var r=0;r<e.message.length;r++)t.add(e.message[r],t.danger);return e.res}}};for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a]);return r}]),alt.module("alt-validation",alt.modules.route),alt.menu="",alt.menuFolder=alt.menuFolder||"menu",alt.modules.menu=angular.module("alt-menu",[]).run(["$rootScope",function(e){e.menu=store.get(alt.application+"_menu")||{submenu:""},e.$watch("menu",function(t,n){t!=n&&(store.set(alt.application+"_menu",t),e.menu=t)},!0),e.$on("$routeChangeStart",function(t,n,r){alt.menu=alt.menuFolder+"/"+("viewer"==n.params.altaction?$auth.userdata.usergroupname:"public")+".html",e.menuLocation=alt.menu,e.menu.submenu=""})}]),alt.module("alt-menu",alt.modules.menu),alt.modules.auth=angular.module("alt-auth",["angular-jwt"]).factory("$auth",["$log","$window","jwtHelper",function(e,t,n){return store.set(alt.application+"_token",store.get(alt.application+"_token")||""),store.set(alt.application+"_userdata",store.get(alt.application+"_userdata")||{}),{token:"",userdata:{},set_token:function(e){this.token=e,store.set(alt.application+"_token",this.token)},set_userdata:function(e){this.userdata=e,store.set(alt.application+"_userdata",this.userdata)},login:function(e){"string"==typeof e?(this.set_token(e),this.set_userdata(n.decodeToken(this.token))):this.set_userdata(e)},logout:function(){this.token="",this.userdata={},store.set(alt.application+"_token",""),store.set(alt.application+"_userdata",{}),store.set(alt.application+"_filter",""),store.set(alt.application+"_sorting","")},islogin:function(){return""!=this.token?!n.isTokenExpired(this.token):Object.keys(this.userdata).length>0},check:function(e){return 0==e?this.islogin():this.islogin()&&"undefined"!=typeof this.userdata.userlevel&&(parseInt(this.userdata.userlevel)&parseInt(e))>0},set_permission:function(e,n){return n="undefined"!=typeof n?n:!0,this.check(e)?!0:(n&&(t.location.href=alt.baseUrl+"error?code=403"),!1)}}}]).config(["$provide","$httpProvider",function(e,t){e.factory("authHttpInterceptor",["$auth","$log","$q","$window",function(e,t,n,r){return{request:function(t){return 0===t.url.indexOf(alt.serverUrl)&&t.data&&(t.data.token=e.token),t}}}]),t.interceptors.reverse().push("authHttpInterceptor"),t.interceptors.reverse()}]),alt.module("alt-auth",alt.modules.auth),alt.modules.api=angular.module("alt-api",[]).config(["$provide","$httpProvider",function(e,t){t.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var n=null;e.factory("httpInterceptor",["$log","$q","$window",function(e,t,r){return{request:function(e){if(n=n||e.transformRequest,e.headers["Content-Type"])if(0===e.headers["Content-Type"].indexOf("application/x-www-form-urlencoded")){var t=[],r=function(e,t){if("$$hashKey"==e)return"";var n;switch(typeof t){case"string":case"number":return e+"="+encodeURIComponent(t);case"object":n=[];for(var a in t)t.hasOwnProperty(a)&&"$$hashKey"!=a&&n.push(r(e+"["+a+"]",t[a]));return n.join("&");case"array":n=[];for(var a=0;a<t.length;a++)n.push(r(e+"["+a+"]",t[a]));return n.join("&")}};for(var a in e.data)e.data.hasOwnProperty(a)&&"$$hashKey"!=a&&t.push(r(a,e.data[a]));e.transformRequest=n,e.data=t.join("&")}else 0==e.headers["Content-Type"].indexOf("multipart/form-data")&&(e.transformRequest=[function(t){var n=new FormData,r=function(e,t,n){if("$$hashKey"==t)return"";switch(typeof n){case"string":case"number":e.append(t,n);break;case"object":if("undefined"!=typeof File&&n instanceof File)e.append(t,n);else if("undefined"==typeof File&&"undefined"!=typeof n.name)e.append(t,n);else for(var a in n)n.hasOwnProperty(a)&&"$$hashKey"!=a&&r(e,t+"["+a+"]",n[a]);break;case"array":for(var a=0;a<n.length;a++)r(e,t+"["+a+"]",n[a])}};for(var a in e.data)e.data.hasOwnProperty(a)&&"$$hashKey"!=a&&r(n,a,e.data[a]);return n}],delete e.headers["Content-Type"]);return e},response:function(e){var n=angular.copy(e);if("object"==typeof e.data){if(n.version=e.data.v||100,n.code=e.data.s||e.data.code||1,n.status=n.code,n.data=e.data.d||e.data.data||"",n.message=e.data.m||e.data.msg||"",n.time=e.data.t||0,n.usage=e.data.u||"",n.token=e.data.token||"",1!=n.status)return"401"==n.status?(r.location.href=alt.baseUrl+"auth/login",t.reject(n)):(n.message=n.message||"Gagal terhubung ke server",t.reject(n))}else if(0===e.config.url.indexOf(alt.serverUrl)&&"object"!=typeof e.data)return n.code=-1,n.status=n.code,n.message="Tidak dapat terhubung ke server","development"==alt.environment.toLowerCase()&&(n.message+="<br/>"+e.data),t.reject(n);return n}}}]),t.interceptors.push("httpInterceptor")}]).factory("$api",["$http","$log","$q",function(e,t,n){return function(t,r,a){t=t||"";var o=t.split("/");return r=r||o[o.length-1]+"id",t=(0!==t.indexOf(alt.serverUrl)?alt.serverUrl:"")+t,a=alt.extend({success:function(){return!0},error:function(){return!0}},a),{url:t,pkey:r,config:a,connect:function(r,o,l){r=r||"",r=(0!==r.indexOf("/")?"/":"")+r,o=o||{},l=alt.extend({skipAuthorization:!1,ismultipart:!1,method:"POST"},l);var i={headers:{"Content-Type":l.ismultipart?"multipart/form-data":"application/x-www-form-urlencoded"},skipAuthorization:l.skipAuthorization,method:l.method,data:o,url:t+r},u=n.defer();return a.connect(i)!==!1?e(i).then(function(e){a.success(e)!==!1&&u.resolve(e)},function(e){a.error(e)!==!1&&u.reject(e)}):a.error(error)!==!1&&u.reject(error),u.promise},count:function(e,t){return this.connect("count",e,t)},list:function(e,t){return this.connect("list",e,t)},retrieve:function(e,t,n){return e=e||"",t=t||{},t[r]=e,this.connect("retrieve",t,n)},keyvalues:function(e,t){return this.connect("keyvalues",e,t)},insert:function(e,t){return this.connect("insert",e,t)},update:function(e,t){return this.connect("update",e,t)},remove:function(e,t){e=e||"";var n={};return n[r]=e,this.connect("delete",n,t)},isexist:function(e,t){return this.connect("is_exist",e,t)}}}}]),alt.module("alt-api",alt.modules.api);