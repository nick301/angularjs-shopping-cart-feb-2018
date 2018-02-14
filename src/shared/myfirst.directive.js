/*
Creating a directive.
Directives have more flexibility than a component.
Directives can be used to add extra behaviours.
*/
angular.module('shoppingcart.shared')
    .directive('myFirst',[function(){
        return {
         restrict: 'EA',  //A = Attribute, E = Element, C = Class. Combination is also allowed.  
         template: '<div>My Directive</div>', //TemplateUrl can also be used.
         scope: true ,//values can be 1. true(new scope will be created for the directive), 2. false(no new scope will be created), 3. { } or isolated scope (new scope will be created without any parent-child relationship)
         link: function(scope, element, attributes){ //Link function can be used, once the directive is ready and compiled to be used.

         }
        };
    }]);