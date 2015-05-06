define([
    'component/alt/button/controller',
    'component/system/registry/dbo'
], function(){
    return [
        '$scope', '$routeParams', '$log', '$button', '$auth', '$validate', '$window', '$location', '$api', '$alert', '$q', 'Dbo_Registry',
        function($scope, $routeParams, $log, $button, $auth, $validate, $window, $location, $api, $alert, $q, Dbo_Registry){
            if($auth.islogin()) $window.location.href = alt.baseUrl + 'dashboard';

            $scope.data = {
                username: '',
                password: ''
            };

            $scope.$watch("data.username", function(newvalue, oldvalue){
                if(newvalue != oldvalue){
                    $scope.data.username = ($scope.data.username || '').toLowerCase();
                }
            });

            $scope.issubmit = false;
            $scope.submit = function(){
                var deferred = $q.defer();
                if($validate.required($scope.data.username) && $validate.required($scope.data.password)){
                    $api('auth').connect('login', $scope.data, true).then(function(response){
                        if(response.data != ''){
                            $auth.login(response.data);
                            $window.location.href = alt.baseUrl + 'dashboard';
                        }else{
                            $alert.add(response.message, $alert.danger);
                        }
                        deferred.resolve();
                    }, function(response){
                        $alert.add(response.message, $alert.danger);
                        deferred.reject();
                    });
                }else{
                    deferred.reject();
                }
                return deferred.promise;
            };

            $scope.login = $button('login');
            $scope.login.onclick = $scope.submit;
        }];
});