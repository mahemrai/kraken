/**
 * LibraryController
 *
 * @description :: Server-side logic for managing libraries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Add article to user's library.
     * @param  {Request}  req
     * @param  {Response} res
     */
    create: function (req, res) {
        var user = (req.session) ? req.session.user : undefined;
        var article = (req.body) ? req.body.id : undefined;

        ArticleService.addToUserLibrary(user, article, function () {
            return res.json({
                status: 100,
                message: 'Article added to your library.'
            });
        });
    },

    /**
     * Get list of user's saved articles.
     * @param  {Request}  req
     * @param  {Response} res
     */
    get: function (req, res) {
        var user = (req.session) ? req.session.user : undefined;

        ArticleService.getUserLibrary(user, function (result) {
            if (!result) return res.serverError('Could not load your library.');
            return res.json(result);
        });
    }
};

