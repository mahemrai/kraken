/**
 * UserService
 */
module.exports = {
    /**
     * Fetch profile data of the currently logged in user.
     * @param  {User}     user
     * @param  {Function} cb
     */
    getUserProfile: function (user, cb) {
        User.query("SELECT user.firstname, user.lastname, user.profilePic, auth.email " + 
                   "FROM user JOIN auth ON user.id = auth.user WHERE user.id = '" + user.id + "'",
        function (err, result) {
            if (err) cb(false);
            cb(result);
        });
    }
}