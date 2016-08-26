/**
 * @class User
 */
export class User {
    /**
     * @property firstname
     * @type {String}
     * @protected
     */
    protected firstname:String;
    
    /**
     * @property lastname
     * @type {String}
     * @protected
     */
    protected lastname:String;

    /**
     * @property email
     * @type {String}
     * @protected
     */
    protected email:String;

    /**
     * @propert password
     * @type {String}
     * @protected
     */
    protected password:String;

    /**
     * Sets user's firstname
     * @param {String} firstname
     */
    public setFirstname(firstname:String) {
        this.firstname = firstname;
    }

    /**
     * Gets user's firstname
     * @return String
     */
    public getFirstname() {
        return this.firstname;
    }

    /**
     * Sets user's lastname
     * @param {String} lastname
     */
    public setLastname(lastname:String) {
        this.lastname = lastname;
    }

    /**
     * Gets user's lastname
     * @return String
     */
    public getLastname() {
        return this.lastname;
    }

    /**
     * Sets user's email
     * @param {String} email
     */
    public setEmail(email:String) {
        this.email = email;
    }

    /**
     * Gets user's email
     * @return String
     */
    public getEmail() {
        return this.email;
    }

    /**
     * Sets user's password
     * @param {String} password
     */
    public setPassword(password:String) {
        this.password = password;
    }

    /**
     * Gets user's password
     * @return String
     */
    public getPassword() {
        return this.password;
    }
}