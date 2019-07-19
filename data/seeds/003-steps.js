exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipeID: 1, step: 'Bring green beans to a boil'},
        { recipeID: 2, step: 'Batter Chicken'},
        { recipeID: 3, step: 'Shred Lettuce'},
        { recipeID: 3, step: 'Add Beef'},
        { recipeID: 3, step: 'Eat Taco'}
      ]);
    });
};