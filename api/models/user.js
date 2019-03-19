const {Model} = require.main.require('./config/bookshelf.js')
const bcrypt = require('bcryptjs')

const User = Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    
    hashPassword: function (password, done) {
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(password, salt);
        done(hash)
    },

    comparePassword: (password, user) => {
        return bcrypt.compareSync(password, user.get('password'))
    },
    hidden: ['password'],

})

module.exports = User