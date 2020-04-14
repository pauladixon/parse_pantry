var Grocery = require('../models/grocery');
var Item = require('../models/item');

module.exports = {
  index,
  show
};

function index(req, res) {
  Grocery.find({}, (err, groceries) => {
    res.render('dashboard', {
      groceries,
      time: req.time,
      user: req.user
    })
  });
}

function index(req, res) {
    Item.find({}, (err, items) => {
      res.render('dashboard', {
        items,
        time: req.time,
        user: req.user
      })
    });
  }
  

function show(req, res) {
    Grocery.findById(req.params.id, (err, grocery) => {
      res.render('dashboard', {
        grocery,
        user: req.user,
        item: req.item
      })
  })
}

  function show(req, res) {
      Item.findById(req.params.id, (err, item) => {
        res.render('dashboard', {
          item,
          user: req.user,
          grocery: req.grocery
        })
    })
  }
