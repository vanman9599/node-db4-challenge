
exports.up = function(knex) {
  return knex.schema 
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .unique()
        .notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('ingredient')
      .unique()
      .notNullable();
     
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('ingredientID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl.integer('recipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.float('quantity')
        .notNullable()
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.text('step')
        .notNullable();
      tbl.integer('recipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  })

  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
};
