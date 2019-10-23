angular.module('demoApp').constant('apiUrls', (function () {
    const url ='http://localhost:3000';
    return {
        GET_DATA: `${url}/getData`,
        SAVE_DATA: `${url}/saveData`
    }
})());