var express = require('express');
var router = express.Router();

const listsCtrl =  require('../controllers/lists')

router.get('/', listsCtrl.index)

module.exports = router;
