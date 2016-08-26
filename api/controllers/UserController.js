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
            res.json({
                status: 100,
                message: 'Account successfully created.'
            });
        });
    }
});