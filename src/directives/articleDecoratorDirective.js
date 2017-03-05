'use strict';

app.directive('decorateArticle', function () {
    return {
        templateUrl : 'views/article/directive/decorator.html',
        restrict : 'E'
    }
});