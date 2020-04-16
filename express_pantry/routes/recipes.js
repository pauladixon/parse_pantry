const express = require('express')
const router = express.Router()
const recipesCtrl = require('../controllers/recipes')

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/', recipesCtrl.index)
router.get('/new', recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.update);
router.delete('/:id', recipesCtrl.delete);

module.exports = router;
