'use strict';

// Article data
var articles = [
    {'title' : '#15 Preparation à la certification TYPO3 developer ', 'description' : 'La communauté TYPO3 a lancé dernièrement deux nouvelles certifications, une certification editeur et une développeur en plus de la certification integrateur.', 'uri' : '', 'file' : '4.md', 'date' : new Date('2017-03-05')},
    {'title' : '#5 Preparation à la certification TYPO3 developer ', 'description' : 'La communauté TYPO3 a lancé dernièrement deux nouvelles certifications, une certification editeur et une développeur en plus de la certification integrateur.', 'uri' : '', 'file' : '3.md', 'date' : new Date('2017-03-05')},
    {'title' : 'Maecenas sit amet orci dictum velit rutrum bibendum at nec sapien', 'description' : 'Fusce volutpat metus vel nulla eleifend, vel interdum orci posuere. Sed blandit ut ipsum eu tincidunt. In scelerisque velit non aliquet bibendum. Sed auctor vitae mauris eget scelerisque. Morbi et sem tristique, condimentum eros in, sagittis felis. Nam in mi a magna pulvinar finibus posuere nec erat.', 'uri' : 'posuere-nec-erat', 'file' : '2.md', 'date' : new Date('2017-03-03')},
    {'title' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla orci, imperdiet sed augue ac, commodo commodo lectus', 'description' : 'Morbi a ex odio. Suspendisse viverra pulvinar sagittis. Nullam vel lacus dignissim elit faucibus dapibus. Etiam quis dui suscipit, pellentesque turpis vitae, condimentum metus. Suspendisse a convallis nulla. Fusce sit amet tortor suscipit, congue turpis vitae, venenatis diam.', 'uri' : 'lorem-ipsum-dolor', 'file' : '1.md', 'date' : new Date('2017-03-03')},
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