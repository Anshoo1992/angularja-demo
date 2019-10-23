'use strict';

angular.
  module('demoApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        otherwise('/home');
    }
  ]);
