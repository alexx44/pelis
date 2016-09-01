'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routerProvider', function($routerProvider){
    $routerProvider.when('/', {templateUrl: 'partial/lista-pelis.html', controller: 'ListaPelisCtrl'});
    $routerProvider.otherwise({redirectTo: '/'});
}]);
