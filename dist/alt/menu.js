alt.loader.menu=function(){return"undefined"!=typeof alt.modules.menu?alt.modules.menu:(alt.menu="",alt.menuFolder=alt.menuFolder||"menu",alt.modules.menu=angular.module("alt-menu",[]).run(["$rootScope","$store",function(e,n){e.menu=n.get("menu")||{submenu:""},e.$watch("menu",function(u,t){u!=t&&(n.set("menu",u),e.menu=u)},!0),e.$on("$routeChangeStart",function(n,u,t){alt.menu=alt.menuFolder+"/"+("viewer"==u.params.altaction?$auth.userdata.usergroupname:"public")+".html",e.menuLocation=alt.menu,e.menu.submenu=""})}]),void alt.module("alt-menu",alt.modules.menu))},"undefined"!=typeof define?define([],function(){alt.loader.menu()}):alt.loader.menu();