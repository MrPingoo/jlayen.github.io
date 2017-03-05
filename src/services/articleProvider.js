'use strict';

// Article data
var articles = [
    {'title' : 'AAA', 'description' : 'desc AAA', 'uri' : '', 'file' : '1.md', 'id' : 1},
    {'title' : 'BBB', 'description' : 'desc BBB', 'uri' : '', 'file' : '2.md', 'id' : 2}
];

// function convert to slug
function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

app.service('articleProvider', function () {
    this.getArticles = function () {
        for (var article in articles) {
            if (!article.uri) {
                articles[article].uri = convertToSlug(articles[article].title);
            }
        }

        return articles;
    }

    this.getArticlesByUid = function ($uri) {
        var article;
        for (var a in articles) {
            if (articles[a].uri == $uri) {
                article = articles[a];
            }
        }

        return article;
    }
});