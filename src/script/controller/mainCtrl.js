'use strict';

var app = angular.module('app');

app.controller('mainCtrl',['$http','$scope',function ($http,$scope) {
    $http.get('/data/positionList.json').success(function (resp) {
        $scope.list = resp;
    });

}])