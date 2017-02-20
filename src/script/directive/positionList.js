'use strict';

var app = angular.module('app');

app.directive('appPositionList',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data:'=',
            isLogin:'='
        }
    }
}]);