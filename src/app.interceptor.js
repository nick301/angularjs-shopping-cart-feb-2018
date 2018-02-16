/*
Interceptors.
It returns an object.
$httpProvider is to capture a http instance and add required interceptors to it.
*/
angular.module('shoppingcart')
    .factory('ErrorInterceptor', ['$q', function ($q) {
        return {
            responseError: function (err) {
                return $q.reject(err);
            }
        };
    }])
    .factory('FunInterceptor', ['$q', function ($q) {
        return {
            request: function(config){
config.headers.hello = "some header";
return config;
            },
            response: function(res){
                return $q.when(res);
            },
            responseError: function (res) {
                return $q.reject(res);
            }
        };
    }])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.interceptors.push('FunInterceptor');
    }]);