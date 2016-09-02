/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        var user = (req.session) ? req.session.user : undefined;
        var url = (req.body) ? req.body.url : undefined;

        ArticleService.addArticle(user, url, function (article) {
            if (!article) {
                return res.serverError('Cannot share the article.');
            }

            sails.sockets.blast('article_shared', {
                msg: 'Article shared'
            }, req);

            return res.json({
                status: 100,
                message: 'Successfully shared an article.'
            });
        });
    },

    get: function (req, res) {
        ArticleService.fetchRecentArticles(function (results) {
            return res.json(results);
        });
    }
};

