/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Load application dashboard.
     */
	dashboard: function (req, res) {
        return res.view('dashboard');
    }
};

