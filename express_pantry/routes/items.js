var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/', isLoggedIn, itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);
router.get('/:id/edit', itemsCtrl.edit);
router.put('/:id', itemsCtrl.update);

module.exports = router;
