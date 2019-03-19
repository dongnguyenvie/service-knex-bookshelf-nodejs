
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('options', table => {
            table.increments();
            table.string('key');
            table.json('value');
            table.string('option');
            table.timestamps();
        })
      ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('options')
  ])
};

