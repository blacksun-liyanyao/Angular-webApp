'use strict';

var app = angular.module('app');

app.controller('companyCtrl',['$http','$state','$scope',function ($http,$state,$scope) {
    $http.get('/data/company.json?id='+$state.params.id)
        .success(function (resp) {
            $scope.company = resp;
        });
}]);