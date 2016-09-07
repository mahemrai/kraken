/**
 * ArticleService
 */
module.exports = {
    /**
     * Scrape open graph metadata of an article from the provided link and add
     * it to the database.
     * @param {User}     user
     * @param {string}   url
     * @param {Function} cb
     */
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

    /**
     * Get a list of recently added articles.
     * @param  {Function} cb
     */
    fetchRecentArticles: function (cb) {
        Article.find()
               .sort('id DESC')
               .limit(25)
               .populate('sharer')
               .exec(function (err, results) {
                   cb(results);
               });
    },

    /**
     * Add selected article to a user's library.
     * @param {User}     user
     * @param {int}      article
     * @param {Function} cb
     */
    addToUserLibrary: function (user, article, cb) {
        User.findOne(user.id).populate('items').exec(function (err, me) {
            me.items.add(article);
            me.save(function (err) {
                console.log(err);
                console.log('added item to library');
                cb();
            });
        });
    },

    /**
     * Fetch all the articles saved in user's library.
     * @param  {User}     user
     * @param  {Function} cb
     */
    getUserLibrary: function (user, cb) {
        User.find(user.id).exec(function (err, user) {
            if (err) cb(false);
            cb(user.items);
        });
    }
}