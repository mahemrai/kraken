module.exports = {
    /**
     * Create a new user account and an association with
     * the provided authentication details.
     * @param  {Object}   data
     * @param  {Function} cb
     */
    createAccount: function (data, cb) {
        var userId, userAuth;

        User.create({
            firstname : data.firstname,
            lastname  : data.lastname
        }).exec(function (err, user) {
            if(err) throw err;
            userId = user.id;

            Auth.create({
                email    : data.email,
                password : data.password,
                user     : userId
            }).exec(function (err, auth) {
                if (err) throw err;

                User.update({id: userId}, {auth: auth.id}).exec(function (err, updated) {
                    console.log('Updated user with ID: ' + userId);
                    cb();
                });
            });
        });
    }
};