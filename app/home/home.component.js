"use strict";
// Register `home` component, along with its associated controller and template
angular.module("demoApp").component("home", {
  templateUrl: "home/home.template.html",
  controller: 'homeController'
});
angular.module("demoApp").controller("homeController", HomeController);

/*@ngInject*/
function HomeController(apiService, $scope) {
  $scope.result = 0;
  $scope.resultList = [];
  $scope.resultCallback = resultCallback;
  $scope.getData = getData;

  $scope.getData();

  function resultCallback(data) {
    $scope.result = data;
    apiService.saveInputHistory(vm.result).then(
      data => {
        $scope.resultList.push({
          firstInput: data.firstInput,
          secondInput: data.secondInput,
          result: data.result
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  function getData() {
    apiService.getInputHistory().then(
      data => {
        $scope.resultList.push(...data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
