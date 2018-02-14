angular.module('shoppingcart.product')
    .component('productDetails', {
        templateUrl: 'src/product/components/productdetails/product-details.component.html',
        bindings: {
            product: '<'
        }
    });