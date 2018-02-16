angular.module('shoppingcart.shared')
    .directive('prodTitle',['$q','ProductService',function ($q,ProductService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, el, attrs, ngModelCtrl) {
                console.log(ngModelCtrl);
                ngModelCtrl.$validators.prodTitle = function (val) {
                    if (!val) {
                        return true;
                    }
                    if (val.startsWith('a')) {
                        return false;
                    }
                    return true;
                };

                ngModelCtrl.$asyncValidators.prodAvailability = function(val){
                    //Create custom promise.                    
                    var defer = $q.defer();
                    ProductService.searchProduct(val).then(function(res){
                        //If product already exists, then reject.
                        if(res.length > 0){
                            defer.reject();
                        }
                        //If product do not exist, then resolve.
                        defer.resolve();
                    });
                    return defer.promise;                   
                };
            }
        }
    }])