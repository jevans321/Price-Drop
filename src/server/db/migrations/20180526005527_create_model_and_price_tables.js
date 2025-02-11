exports.up = function(knex, Promise) {
  return knex.schema.createTable('models', function(table) {
    table.increments('id').primary().notNullable();
    table.string('model', 60).notNullable();
    table.string('title', 200).notNullable();
    table.string('image', 30);
    table.timestamps(true, true);
  })
  .createTable('prices', function(table) {
    table.increments('id').primary().notNullable();
    table.integer('model_id').unsigned().notNullable().references('models.id');
    table.string('price', 30).notNullable();
    table.integer('flag', 1).notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prices').dropTable('models');
};
