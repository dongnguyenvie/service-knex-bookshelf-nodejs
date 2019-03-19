
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
        table.increments();
        table.string('name');
        table.string('email').unique();
        table.string('password');
        table.string('role_id');
        table.json('information');
        table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};

