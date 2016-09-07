/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    /**
     * Perform registration process.
     * @param {Request}  req
     * @param {Response} res
     */
    register: function(req, res) {
        var user = (req.body) ? req.body : undefined;
        RegistrationService.createAccount(user, function (success) {
            return res.json({
                status: 100,
                message: 'Account successfully created.'
            });
        });
    },

    /**
     * Get user's profile.
     * @param  {Request}  req
     * @param  {Response} res
     */
    profile: function (req, res) {
        var user = req.session.user;

        UserService.getUserProfile(user, function (result) {
            if (!result) return res.serverError('Could not fetch your profile.');
            return res.json(result);
        });
    }
});