const List = require('../models/lists')

function index(req, res){
    List.find({}, function(err, lists){
        res.render('lists/index', {title: 'parse pantry', lists})
    })
}

module.exports = {
    index,
}