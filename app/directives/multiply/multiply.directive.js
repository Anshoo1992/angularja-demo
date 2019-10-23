angular.module("demoApp").directive("multiply", function() {
  return {
    restrict: 'E',
    scope: {
      resultCallback:'=',
    },
    templateUrl: 'directives/multiply/multiply.template.html',
    controller:'multiplyController'
  };
});
