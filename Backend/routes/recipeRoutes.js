const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.post('/create', recipeController.create);

router.get('/list', recipeController.list);

router.get('/show/:id', recipeController.show);


router.put('/update/:id', recipeController.update);


router.delete('/delete/:id', recipeController.delete);

module.exports = router;
