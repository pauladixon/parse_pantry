const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}

router.get('/new', groceriesCtrl.new);
router.get('/:id', groceriesCtrl.show);
router.post('/', groceriesCtrl.create);
router.get('/:id', groceriesCtrl.update);
router.delete('/:id', groceriesCtrl.delete);

module.exports = router;
