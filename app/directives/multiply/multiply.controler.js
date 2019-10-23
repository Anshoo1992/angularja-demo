(function() {
  "use strict";

  angular
    .module("demoApp")
    .controller("multiplyController", MultiplyController);

  /*@ngInject*/
  function MultiplyController($scope) {
    $scope.submitForm = submitForm;
    $scope.clearForm = clearForm;
    $scope.formData = {
      firstInput: "",
      secondInput: ""
    };
    function submitForm() {
      $scope.result =
        Number($scope.formData.firstInput) *
        Number($scope.formData.secondInput);
      $scope.resultCallback({
        firstInput:Number($scope.formData.firstInput),
        secondInput :Number($scope.formData.secondInput),
        result:$scope.result
      });
    }

    function clearForm() {
      $scope.formData = { };
      $scope.result=0;
      $scope.multiplyForm.$setPristine();
      $scope.multiplyForm.$setUntouched();
    }
  }
})();
