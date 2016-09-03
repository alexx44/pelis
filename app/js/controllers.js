'use strict';
angular.module('myApp.controllers', []).
controller('ListaPelisCtrl', ['$scope', 'rtmFactory',
    function($scope, rtmFactory) {
        $scope.countries = rtmFactory.getCountries();
    }
])