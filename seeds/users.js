const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);

const pass = '123123';
const hash = bcrypt.hashSync(pass, salt);

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      let dbSeed = []
      for (let i = 1; i < 11; i++) {
        dbSeed.push(
          {
            id: i,
            name: 'name_' + i,
            email: 'email_' + i,
            role_id: 'member',
            password: hash,
            information: JSON.stringify({
              age: i,
              sex: 1
            })
          }
        ) // end push
      }
      return knex('users').insert(dbSeed);
    });
};
