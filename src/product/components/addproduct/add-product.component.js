angular.module('shoppingcart.product')

    .controller('AddProductController', ['ProductService', function (ProductService) {

        this.newProduct = {}; //Values being passed from UI, will be stored here.

        this.onFormSubmit = function (e, form) {
            e.preventDefault();
            //If the form is in valid state, then the new product will be added.
            if (form.$valid) {
                ProductService.addProducts(this.newProduct)
                    .then(function () {
                        alert("Product Added Successfully.");
                    });
            }
        }
    }])
    .component('addProduct', {
        templateUrl: 'src/product/components/addproduct/add-product.component.html',
        controller: 'AddProductController'
    });