const db = require('../data/db-config.js');
module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', 'ri.recipeID')
        .join('ingredients as i', 'i.id', 'ri.ingredientID')
        .where({ id })
        .select()
}

function getInstructions(id){

}