define([
], function(){
    return [
        '$scope', '$routeParams', '$log', '$auth', '$api', '$window', '$location',
        function($scope, $routeParams, $log, $auth, $api, $window, $location){
            $api('auth').connect('logout').then(function(response){
                $auth.logout();
                $window.location.href = alt.baseUrl + 'auth/login';
            }, function(response){
                $auth.logout();
                $window.location.href = alt.baseUrl + 'auth/login';
            });
        }];
});