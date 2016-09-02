module.exports = {
    addArticle: function (user, url, cb) {
        var scraper = require('metagetplus');
        scraper.fetch(url, function (err, response) {
            var metadata = response['meta'];

            if (metadata['og:title'] === undefined) {
                cb(false);
            } else {
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
            }
        });
    },

    fetchRecentArticles: function (cb) {
        Article.find()
               .sort('id DESC')
               .limit(25)
               .populate('sharer')
               .exec(function (err, results) {
                   cb(results);
               });
    }
}