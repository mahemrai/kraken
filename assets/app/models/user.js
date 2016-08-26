"use strict";
/**
 * @class User
 */
class User {
    /**
     * Sets user's firstname
     * @param {String} firstname
     */
    setFirstname(firstname) {
        this.firstname = firstname;
    }
    /**
     * Gets user's firstname
     * @return String
     */
    getFirstname() {
        return this.firstname;
    }
    /**
     * Sets user's lastname
     * @param {String} lastname
     */
    setLastname(lastname) {
        this.lastname = lastname;
    }
    /**
     * Gets user's lastname
     * @return String
     */
    getLastname() {
        return this.lastname;
    }
    /**
     * Sets user's email
     * @param {String} email
     */
    setEmail(email) {
        this.email = email;
    }
    /**
     * Gets user's email
     * @return String
     */
    getEmail() {
        return this.email;
    }
    /**
     * Sets user's password
     * @param {String} password
     */
    setPassword(password) {
        this.password = password;
    }
    /**
     * Gets user's password
     * @return String
     */
    getPassword() {
        return this.password;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map