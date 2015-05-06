requirejs.s.contexts._.config.shim['asset/js/amcharts/pie' + (alt.useMinified ? '.min' : '')] = {
    deps: ['asset/js/amcharts/amcharts' + (alt.useMinified ? '.min' : '')]
};

define([
    'component/alt/chart/controller',
    'asset/js/amcharts/pie'
], function(){
    return alt.component({
        name: 'altChartPie',
        templateUrl: 'component/alt/chart/pie/view.html',
        scope: {
            data: '=?altChartPie',
            setting: '=?'
        },
        isskip: true,
        link: ['$scope', '$log', '$element', '$timeout', function($scope, $log, $element, $timeout){
            $scope.data     = alt.extend([], $scope.data);
            $scope.setting  = alt.extend({
                chart       : {
                    type: 'pie'
                }
            }, $scope.setting);
        }]
    });
});