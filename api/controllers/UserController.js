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

    profile: function (req, res) {
        var user = req.session.user;

        User.query("SELECT user.firstname, user.lastname, user.profilePic, auth.email " + 
                   "FROM user JOIN auth ON user.id = auth.user WHERE user.id = '" + user.id + "'",
        function (err, result) {
            if (err) return res.serverError(err);
            return res.json(result);
        });
    }
});