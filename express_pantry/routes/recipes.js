const express = require('express')
const router = express.Router()
const recipesCtrl = require('../controllers/recipes')

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/', isLoggedIn, recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new);
router.get('/:id', isLoggedIn, recipesCtrl.show);
router.post('/', isLoggedIn, recipesCtrl.create);
router.get('/:id', isLoggedIn, recipesCtrl.update);
router.delete('/:id', isLoggedIn, recipesCtrl.delete);

module.exports = router;
