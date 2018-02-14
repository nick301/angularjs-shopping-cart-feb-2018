/*
Created a new module for Shopping cart and 
added other modules as its dependencies.
This will be a Parent Module.
*/
angular.module('shoppingcart', [
    'ui.router',
    'shoppingcart.cart',
    'shoppingcart.product',
    'shoppingcart.shared'
]);

//Defining the route urls below.
angular.module('shoppingcart')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state({
                name: 'home',
                url: '/',
                component: 'productList',
                resolve: {
                    products: ['ProductService', function (ProductService) {
                        return ProductService
                            .getProducts()
                            .then(function (res) {
                                return res.data;
                            });
                    }]
                }
            });

            $stateProvider.state({
                name: 'addProduct', //name of the state. It can be same or different from component name.
                url: '/add-product',
                component: 'addProduct'
            });

            $stateProvider.state({
                name: 'showProductInfo',
                url: '/product-details/{productId}',
                component: 'productDetails',
                //We use 'resolve' for early binding;i.e; the required/filtered data will be generated before the respective component is hit. 
                resolve: {
                    
                    //$transition$: Also known as Transition Hooks. It is a property of ui-router.It is used to capture specific lifecycle event of a Transition.
                    //$transition$.params(): Helps in getting all the url parameters.
                    //The below key, i.e, 'product', will be available to the 'productDetails' component as a binding.
                    product: ['ProductService', '$transition$', function (ProductService, $transition$) {
                        var productId = $transition$.params().productId;
                        return ProductService.getProductDetails(productId);
                    }]
                }
            });

            $stateProvider.state({
                name: 'cart',
                url: '/cart',
                component: 'cart'
            });

            $urlRouterProvider.otherwise('/');
        }]);