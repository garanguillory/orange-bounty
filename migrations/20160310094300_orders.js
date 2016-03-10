
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table){
    table.increments();
    table.string('usr_id');
    table.boolean('completed');
    table.string('address');
    table.string('first_name');
    table.string('last_name');
    table.string('company');
    table.string('state');
    table.string('zip');
    table.string('fruit_id');
    table.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
