
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: '2 Cans Green Beans'},
        {ingredient: 'Chicken'},
        {ingredient: '1 Box Taco Shells'}, 
        {ingredient:  '1 lb Ground Beef'}
      ]);
    });
};
