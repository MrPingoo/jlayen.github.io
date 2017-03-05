'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller : 'articleIndex',
                templateUrl: 'views/article/index.html'
            })
            .when('/article/:id', {
                controller : 'articleShow',
                templateUrl: 'views/article/show.html'
            })
    }
);