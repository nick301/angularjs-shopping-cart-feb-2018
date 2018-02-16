/*
Created a decorator for exception handling.
We can combine the original exception handler along with the Custom built exception handler.
In below case
$exceptionHandler(It is an angular service for exceptions.)
will be available inside the $delegate.

The below decorator is applicable for the whole module and need not be defined for any other services or components.
*/
angular.module('shoppingcart'
    .decorator('$exceptionHandler',['$delegate',function($delegate){ //$delegate - Gets the original exception.
        return function(exception, cause){
            console.warn("My Custom Handler");
            $delegate(exception, cause); //This is an original handler.
        };
    }]))