
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('category', table => {
            table.increments();
            table.string('title');
            table.string('images');
            table.string('type');
            table.text('description');
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('category')
      ])
};
