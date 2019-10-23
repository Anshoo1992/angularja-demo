"use strict";

describe("home", function() {
  // Load the module that contains the `home` component before each test
  beforeEach(module("demoApp"));
  // Test the controller
  describe("HomeController", function() {
    var $httpBackend, ctrl, _apiService, $scope, rootScope, _httpUrls, $q;

    beforeEach(inject(function(
      $rootScope,
      $componentController,
      _$httpBackend_,
      $injector
    ) {
      $httpBackend = _$httpBackend_;
      rootScope = $rootScope;
      $scope = $rootScope.$new();
      $q = $injector.get("$q");
      _httpUrls = $injector.get("apiUrls");
      _apiService = $injector.get("apiService");
      ctrl = $componentController("home", {
        $scope: $scope
      });
    }));

    it("should call getData to fetch data on load", function() {
      const data = [
        { firstInput: 1, secondInput: 2, result: 2 },
        { firstInput: 1, secondInput: 3, result: 3 }
      ];
      spyOn(_apiService, "getInputHistory").and.returnValue($q.resolve(data))
      expect($scope.resultList).toEqual([]);
      $scope.getData();
      expect(_apiService.getInputHistory).toHaveBeenCalled()
    });
  });
});
