describe("Test project context service which is app/modules/projectcontext/projectContextService.js", function(){
    var _apiService ,httpBackend,$q;
  
    beforeEach(function(){
      module('demoApp');
    });
    beforeEach(inject(function ($injector,$httpBackend,$q) {
      _apiService = $injector.get('apiService');
      $q = $injector.get("$q");
      httpBackend = $httpBackend;
    }));
    fdescribe("projectContextService", function() {
      it('should return toasterObject',function(){
       
        var resultMock =[
            { firstInput: 1, secondInput: 2, result: 2 },
            { firstInput: 1, secondInput: 3, result: 3 }
          ];
           var urlMock = 'http://localhost:0000/getData';
           console.log(httpBackend)
           httpBackend.whenGET(urlMock).respond(resultMock);
           _apiService.getInputHistory().then(function(result){
               expect(result).toBeDefined();
           }, function(error){
           });
           httpBackend.flush();
      });
      it('should return toasterObject',function(){
       
        var resultMock =[
            { firstInput: 1, secondInput: 2, result: 2 },
            { firstInput: 1, secondInput: 3, result: 3 }
          ];
           var urlMock = 'http://localhost:0000/saveData';
           console.log(httpBackend)
           httpBackend.whenPost(urlMock).respond(resultMock);
           _apiService.saveInputHistory(resultMock).then(function(result){
               expect(result).toBeDefined();
           }, function(error){
           });
           httpBackend.flush();
      })
    });
  })
  