
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fruits', function(table){
    table.increments();
    table.string('name');
    table.float('price');
    table.integer('rating');
    table.text('description');
    table.string('image');
    table.boolean('outofstock');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fruits');
};
