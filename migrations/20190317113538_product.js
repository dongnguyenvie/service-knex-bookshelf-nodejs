
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('product', table => {
        table.increments();
        table.string('title');
        table.json('images');
        table.json('price');
        table.text('content');
        table.string('featured');
        table.integer('brand_id');
        table.integer('category_id')
        table.integer('user_id');
        table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('product')
  ])
};