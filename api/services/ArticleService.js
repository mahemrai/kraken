module.exports = {
    addArticle: function (user, url, cb) {
        var scraper = require('metagetplus');
        scraper.fetch(url, function (err, response) {
            var metadata = response['meta'];

            Article.create({
                title       : metadata['og:title'],
                description : metadata['og:description'],
                url         : metadata['og:url'],
                image       : metadata['og:image'],
                sharer      : user.id
            }).exec(function (err, article) {
                if (err) return res.serverError(err);
                cb(article);
            });
        });
    }
}