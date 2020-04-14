var express = require('express');
var router = express.Router();
var groceriesCtrl = require('../controllers/groceries');


// router.get('/', groceriesCtrl.index);
router.get('/new', groceriesCtrl.new);
router.get('/:id', groceriesCtrl.show);
router.post('/', groceriesCtrl.create);
router.get('/:id/edit', groceriesCtrl.edit);
router.delete('/:id', groceriesCtrl.delete);

module.exports = router;
