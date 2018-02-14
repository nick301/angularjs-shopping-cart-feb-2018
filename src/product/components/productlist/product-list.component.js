angular.module('shoppingcart.product')
    //.controller('ProductListController', [
        //function (ProductService) {
            // var self = this;
            // self.products = [];
            // self.$onInit = function () {
            //     ProductService.getProducts()
            //         .then(function (result) {
            //             self.products = result.data;
            //         });
            // }
        //}])
    .component('productList', {
        templateUrl: 'src/product/components/productlist/product-list.component.html',
        bindings: {
            products: '<'
        }
        //controller: 'ProductListController'
    });