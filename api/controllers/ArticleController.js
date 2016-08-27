/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        /*var scraper = require('metagetplus');
        var url = req.query.q;
        scraper.fetch(url, function (err, data) {
            console.log(data['meta']);
            return res.json({success: true});
        });*/

        var user = (req.session) ? req.session.user : undefined;
        var url = (req.body) ? req.body.url : undefined;

        ArticleService.addArticle(user, url, function (article) {
            return res.json({
                status: 100,
                message: 'Successfully shared an article.'
            });
        });
    },

    get: function (req, res) {
        Article.find()
               .sort('id DESC')
               .limit(50)
               .populate('sharer')
               .exec(function (err, results) {
                   return res.json(results);
               });
    }
};

