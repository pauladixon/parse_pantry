const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.get('/:id/edit', itemsCtrl.edit)
router.put('/update/:id', itemsCtrl.update);
router.delete('/:id', itemsCtrl.delete);

module.exports = router;
