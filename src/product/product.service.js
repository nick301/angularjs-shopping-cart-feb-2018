/*
Product service 
*/
angular.module('shoppingcart.product')
    .service('ProductService', ['$http', 'AppConstants',
        function ($http, AppConstants) {

            this.getProducts = function () {
                return $http.get(AppConstants.urls.products);
            };

            this.addProducts = function (productDetails) {
                return $http.post(AppConstants.urls.products,productDetails);
            };

            this.getProductDetails = function (productId) {
                return $http.get(AppConstants.urls.products + '/' + productId);
            };
        }]);