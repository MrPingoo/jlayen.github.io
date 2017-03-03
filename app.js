'use strict';

var app = angular.module('demo', ['ngRoute', 'hc.marked']);

app.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);