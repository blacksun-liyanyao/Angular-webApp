'use strict';

var app = angular.module('app');

app.directive('appHead',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html'
    }
}]);