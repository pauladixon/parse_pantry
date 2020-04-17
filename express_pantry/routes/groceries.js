const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');


router.get('/new', groceriesCtrl.new);
router.get('/:id', groceriesCtrl.show);
router.post('/', groceriesCtrl.create);
router.get('/:id/edit', groceriesCtrl.edit)
router.put('/update/:id', groceriesCtrl.update);
router.delete('/:id', groceriesCtrl.delete);

module.exports = router;
