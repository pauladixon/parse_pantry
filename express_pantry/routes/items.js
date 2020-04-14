var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/items');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

// router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.get('/:id/edit', itemsCtrl.edit);
router.delete('/:id', itemsCtrl.delete);

module.exports = router;
