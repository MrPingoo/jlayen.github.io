'use strict';

var app = angular.module('app', ['ngRoute', 'hc.marked'], function($httpProvider){
    if (!!window.FastClick) {
        FastClick.attach(document.body);
    }
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).run(['$location', function($location){
    //Allows us to navigate to the correct element on initialization
    if ($location.path() !== '' && $location.path() !== '/') {
        smoothScroll(document.getElementById($location.path().substring(1)), 500, function(el) {
            location.replace('#' + el.id);
        });
    }
}]);

/* For production mode
app.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);
*/


app.config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
        gfm: true,
        tables: true,
        highlight: function (code, lang) {
            if (lang) {
                return hljs.highlight(lang, code, true).value;
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });
}]);
