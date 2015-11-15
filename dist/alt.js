var alt=angular.module("Alt",[]);alt.application="alt",alt.environment="production",alt.version="2.0.0",alt.urlArgs="",alt.urlArgs="production"==alt.environment?"_v="+alt.version:"_t="+ +new Date,alt.theme="",alt.requires=[],alt.componentFolder="component",alt.modules={},alt.registry={},alt.extend=function(t,e){return t="undefined"==typeof t||null==t?{}:t,e="undefined"==typeof e||null==e?"[object Array]"===Object.prototype.toString.call(t)?[]:{}:e,angular.forEach(t,function(n,o){switch(n="undefined"==typeof n||null==n?{}:n,typeof n){case"object":e[o]="[object Array]"===Object.prototype.toString.call(n)?e[o]||n:alt.extend(t[o],e[o]);break;default:e[o]="undefined"!=typeof e[o]&&e[o]!=angular.noop?e[o]:n}}),e},alt.config(["$locationProvider","$compileProvider","$controllerProvider","$filterProvider","$logProvider","$provide",function(t,e,n,o,r,l){alt._controller=alt.controller,alt._service=alt.service,alt._factory=alt.factory,alt._value=alt.value,alt._directive=alt.directive,alt._filter=alt.filter,alt._run=alt.run,alt._config=alt.config,alt.controller=function(t,e){return n.register(t,e),this},alt.config=function(t,e){return l.config(t,e),this},alt.constant=function(t,e){return l.constant(t,e),this},alt.service=function(t,e){return l.service(t,e),this},alt.factory=function(t,e){return l.factory(t,e),this},alt.value=function(t,e){return l.value(t,e),this},alt.directive=function(t,n){return e.directive(t,n),this},alt.filter=function(t,e){return o.register(t,e),this},alt.run=function(t){for(var e=angular.element(document.getElementsByTagName("body")[0]).injector(),n=(e.get("$log"),t.slice(0,t.length-1)),o=t[t.length-1],r=0;r<t.length-1;r++)n[r]=e.get(n[r]);return o.apply(null,n),this},alt.providers={$compileProvider:e,$controllerProvider:n,$filterProvider:o,$logProvider:r,$provide:l}}]),alt.module=function(t,e){if(alt.requires.indexOf(t)<=-1){alt.requires.push(t);try{for(var n=e||angular.module(t),o=n._invokeQueue,r=n._runBlocks,l=0;l<o.length;l++){var a=o[l],u=alt.providers[a[0]];u[a[1]].apply(u,a[2])}for(var c=0;c<r.length;c++){for(var i=r[c],s=i.slice(0,i.length-1),p=i[i.length-1],f=angular.element(document.getElementsByTagName("body")[0]).injector(),d=0;d<s.length;d++)s[d]=f.get(s[d]);p.apply(null,s)}}catch(g){}}return alt},alt.directive("altComponent",["$log",function(t){return{templateUrl:function(t,e,n){var o=alt.componentFolder+"/"+e.altComponent+"/",r=o+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=alt.urlArgs?"?"+alt.urlArgs:"");return r},transclude:!0,scope:{altComponent:"@",scope:"=",onload:"&?"},controller:["$scope","$timeout","$interval","$attrs","$element",function(t,e,n,o,r){var l=function(){t.onload=t.onload||function(){return angular.noop},t.onload=t.onload(),t.alt=alt;var n=alt.componentFolder+"/"+t.altComponent+"/",l=angular.element(document.getElementsByTagName("body")[0]).injector();requirejs([n+"controller"],function(n){var a=0,u=[];if("function"==typeof n){for(a=0;a<arguments.length;a++)u.push(arguments[a]);u.push(l),n.apply(this,u)}else if("object"==typeof n&&n.length){var c,i="function"==typeof n[n.length-1]?n[n.length-1]:angular.noop,s="function"==typeof n[n.length-1]?n.length-1:n.length;for(a=0;s>a;a++){switch(c=null,n[a]){case"$scope":c=t;break;case"$injector":c=l;break;case"$attrs":c=o;break;case"$element":c=r;break;default:c=l.get(n[a])||null}u.push(c)}i.apply(this,u)}angular.forEach(t,function(e,n){"$"!==n.substr(0,1)&&"scope"!=n&&"altComponent"!=n&&"onload"!=n&&(t["_"+n]=angular.copy(e))}),angular.forEach(t.scope,function(e,n){t[n]=angular.copy(e)});var p=function(t){return null==t.$parent?null:"undefined"==typeof t.$parent.$attrs&&"object"==typeof t.$parent[o.scope]?t.$parent:p(t.$parent)},f=p(t,0);null!=f&&(f[o.scope]=t),t.$apply(),e(function(){t.onload()})})},a=function(){"undefined"!=typeof t.scope&&(window.clearInterval(u),l())},u=window.setInterval(a,100)}]}}]),alt.directive("altTransclude",["$log",function(t){return{templateUrl:function(t,e,n){var o=alt.componentFolder+"/"+e.altTransclude+"/",r=o+"view."+(""!=alt.theme?alt.theme+".":"")+"html"+(""!=alt.urlArgs?"?"+alt.urlArgs:"");return r},transclude:!0,scope:!0,controller:["$scope","$timeout","$interval","$attrs","$element","$rootScope",function(t,e,n,o,r,l){t.$attrs=o;var a=function(){var n=t.$new(),l=alt.componentFolder+"/"+o.altTransclude+"/",a=angular.element(document.getElementsByTagName("body")[0]).injector();n.alt=alt,n.altTransclude=o.altTransclude,n.scope=o.scope,n.onload=t[o.onload]||angular.noop,n.parent=t,requirejs([l+"controller"],function(l){var u=0,c=[];if("function"==typeof l){for(u=0;u<arguments.length;u++)c.push(arguments[u]);c.push(a),l.apply(this,c)}else if("object"==typeof l&&l.length){var i,s="function"==typeof l[l.length-1]?l[l.length-1]:angular.noop,p="function"==typeof l[l.length-1]?l.length-1:l.length;for(u=0;p>u;u++){switch(i=null,l[u]){case"$scope":i=n;break;case"$injector":i=a;break;case"$attrs":i=o;break;case"$element":i=r;break;default:i=a.get(l[u])||null}c.push(i)}s.apply(this,c)}angular.forEach(n,function(t,e){"$"!==e.substr(0,1)&&"scope"!=e&&"altTransclude"!=e&&"onload"!=e&&"parent"!=e&&(n["_"+e]=angular.copy(t))}),angular.forEach(t[o.scope],function(t,e){null!=t&&"undefined"==typeof t.$watch&&(n[e]=angular.copy(t))}),o.scope&&(t[o.scope]=n),o.scope&&t.$parent[o.scope]&&(t.$parent[o.scope]=n),n.$apply(),e(function(){n.onload()})})},u=function(){("undefined"==typeof o.scope||"undefined"!=typeof t[o.scope])&&(window.clearInterval(c),a())},c=window.setInterval(u,100)}]}}]),alt.factory("$uuid",function(){return{create:function(){function t(t){var e=(Math.random().toString(16)+"000000000").substr(2,8);return t?"-"+e.substr(0,4)+"-"+e.substr(4,4):e}return t()+t(!0)+t(!0)+t()},empty:function(){return"00000000-0000-0000-0000-000000000000"}}}),alt.run(["$rootScope","$q","$log",function(t,e,n){t.defaultRouteChanged=function(){var t=e.defer();return t.resolve(),t.promise},t.onRouteChanged=t.defaultRouteChanged,t.alt=alt}]),window.alt=alt;