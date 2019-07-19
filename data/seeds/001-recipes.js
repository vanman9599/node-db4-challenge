
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Green Bean Casserole'},
        { name: 'Beef Taco'},
        { name: 'Fried Chicken'}
      ]);
    });
};
