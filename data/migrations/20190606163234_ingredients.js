exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl)
    {
        tbl.increments("id");
        tbl.string('name', 255).unique('uq_ingredient_name');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };
  