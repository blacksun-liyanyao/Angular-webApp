'use strict';

var app = angular.module('app');

app.directive('appCompany',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/company.html',
        scope:{
            com:'='
        }
    }
}]);