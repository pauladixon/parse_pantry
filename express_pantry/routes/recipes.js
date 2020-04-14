const express = require('express')
const router = express.Router()
const recipesCtrl = require('../controllers/recipes')


router.get('/', recipesCtrl.index)
// router.get('/new', itemsCtrl.new);
// router.get('/:id', itemsCtrl.show);
// router.post('/', itemsCtrl.create);
// router.get('/:id/edit', itemsCtrl.edit);
// router.delete('/:id', itemsCtrl.delete);

module.exports = router;
