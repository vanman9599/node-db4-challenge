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
        .where({ recipeID: id })
        .select('i.ingredient as Ingredient', 'ri.quantity as Quantity')
        .then(shoppingList => {
            if(shoppingList){
                return shoppingList;
            }else{
                return null;
            }
        })
}

function getInstructions(id){
    return db('recipes as r')
    .join('steps as s', 'r.id', 's.recipeID')
    .where({ recipeID: id })
    .select('r.name as Recipe', 's.step as Instructions')
    // .then(instructions => {
    //     if(instructions){
    //         return instructions;
    //     }else{
    //         return null;
    //     }
    // })
}