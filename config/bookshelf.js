const config = require('../knexfile')
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)
bookshelf.plugin('visibility'); // hidden field
bookshelf.plugin('virtuals');

module.exports = bookshelf