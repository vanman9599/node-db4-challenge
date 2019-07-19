const express = require("express");
const db = require('../data/db-config.js');
const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get users' });
      });
  });

  
  
  router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
      .then(list => {
        if (list) {
          res.status(200).json(list);
        } else {
          res.status(404).json({ message: 'Could not find user with given id.' });
        }
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to get user' });
      });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
      .then(list => {
        if (list) {
          res.status(200).json(list);
        } else {
          res.status(404).json({ message: 'Could not find instructions with given id.' });
        }
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to get instructions' });
      });
  });
  module.exports = router;
