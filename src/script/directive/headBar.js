'use strict';

var app = angular.module('app');

app.directive('appHeadBar',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            text:'@'
        },
        link:function (scope) {
            scope.back = function () {
                window.history.back();
            }
        }
    }
}]);