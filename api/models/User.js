/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    
    /* e.g.
    nickname: 'string'
    */
    firstname: 'string',
    lastname: 'string',
    profilePic: 'string',
    articles: {
      collection: 'article',
      via: 'sharer'
    }
  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
