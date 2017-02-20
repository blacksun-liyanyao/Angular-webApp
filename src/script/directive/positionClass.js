'use strict';

var app = angular.module('app');

app.directive('appPositionClass',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionClass.html',
        scope:{
            com:'='
        },
        link:function (scope) {
            scope.showPositionList = function (idx) {
                scope.positionList = scope.com.positionClass[idx].positionList;
                scope.isActive = idx;
            };
            scope.showPositionList(0);
        }
    }
}]);