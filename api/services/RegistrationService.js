module.exports = {
    createAccount: function (data, cb) {
        var userId, userAuth;

        return User.create({
            firstname: data.firstname,
            lastname: data.lastname
        }).exec(function (err, user) {
            if(err) throw err;
            userId = user.id;
            Auth.create({
                email: data.email,
                password: data.password,
                user: userId
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