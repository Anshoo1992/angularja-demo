(function () {

    'use strict';
    angular
        .module('demoApp')
        .service('apiService', ApiService);

    /*@ngInject*/
    function ApiService($q, $http, $log, $cacheFactory, apiUrls) {
        this.getInputHistory = getInputHistory;
        this.saveInputHistory = saveInputHistory;
        this.httpRequestHandler = httpRequestHandler;

        function getInputHistory() {
            return httpRequestHandler(apiUrls.GET_DATA, 'GET', '').then((data) => {
                return data;
            }, (error) => {
                return $q.reject(error);
            });
        }
        function saveInputHistory(data) {
            return httpRequestHandler(apiUrls.SAVE_DATA, 'POST', data).then((data) => {
                return data;
            }, (error) => {
                return $q.reject(error);
            });
        }
        function httpRequestHandler(url, method, data) {
            var req = {
                method: method,
                url: url,
                data: data,
                contentType: 'application/json',
                dataType: JSON,
                crossOrigin: false,
            };

            return $http(req).then(function (response) {
                return response.data;
            }).catch(function (error) {
                $log.debug(error);
                return $q.reject(error);
            });
        }
    }

})();