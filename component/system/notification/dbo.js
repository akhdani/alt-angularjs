define([
], function(){
    alt.factory('Dbo_Notification', ['$api', '$log', function($api, $log){
        return $api('notification');
    }]);
});