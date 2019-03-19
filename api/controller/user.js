const User = require('../models/user')

const findOne = (id) => {
    return User.where('id', id).fetch()
}

module.exports  = {
    findOne
}