const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/new', isLoggedIn, groceriesCtrl.new);
router.get('/:id', isLoggedIn, groceriesCtrl.show);
router.post('/', isLoggedIn, groceriesCtrl.create);
router.get('/:id', isLoggedIn, groceriesCtrl.update);
router.delete('/:id', isLoggedIn, groceriesCtrl.delete);

module.exports = router;
