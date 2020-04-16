const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/new', isLoggedIn, itemsCtrl.new);
router.get('/:id', isLoggedIn, itemsCtrl.show);
router.post('/', isLoggedIn, itemsCtrl.create);
router.get('/:id', isLoggedIn, itemsCtrl.update);
router.delete('/:id', isLoggedIn, itemsCtrl.delete);

module.exports = router;
