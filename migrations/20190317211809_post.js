
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('post', table => {
            table.increments();
            table.string('title');
            table.json('images');
            table.text('content');
            table.integer('featured');
            table.integer('category_id')
            table.integer('user_id');
            table.timestamps();
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('post')
    ])
};