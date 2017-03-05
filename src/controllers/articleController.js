'use strict';

app
    .controller('articleIndex', function ($scope, articleProvider) {
        $scope.articles = articleProvider.getArticles();
    })
    .controller('articleShow', function ($scope, $routeParams, articleProvider, $http) {
        $scope.articles = articleProvider.getArticles();

        var $id = $routeParams.id;
        $scope.article = articleProvider.getArticlesByUid($id);

        $http({
            method: 'GET',
            url: './markdown/' + $scope.article.file
        }).then(function successCallback(response) {
            $scope.article.body = response.data;
        }, function errorCallback(response) {
            console.log('error, file didn\'t exist ! ' + response);
        });
    })
;