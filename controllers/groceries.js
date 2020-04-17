var Grocery = require('../models/grocery');
let User = require('../models/user')

module.exports = {
  show,
  new: newGrocery,
  create,
  edit,
  update,
  delete: deleteGrocery
};


function show(req, res) {
  User.findById(req.user._id, function(err, user) {
      let grocery = user.groceries.id(req.params.id) 
        res.render('groceries/show', {
          user: req.user,
          grocery,
      });
  })
}

function newGrocery(req, res) {
  newGrocery = new Grocery()
  res.render('/', {
    time: req.time,
    user: req.user
  });
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.groceries.push(req.body);
    user.save(function(err) {
      res.redirect('/');
    })
  })
}

function update(req, res) {
  User.findById(req.user._id, function(err, user) {
  let grocery = user.groceries.id(req.params.id);
  grocery.grocery = req.body.grocery
  grocery.quantity = req.body.quantity
  grocery.notes = req.body.notes
    user.save((err) => {
      res.redirect(`/groceries/${req.params.id}`);
    })
  })
} 

function edit(req, res) {
  User.findById(req.user._id, function(err, user) {
  let grocery = user.groceries.id(req.params.id) 
    res.render('groceries/edit', {
      user: req.user,
      grocery
    })
  })
}

function deleteGrocery(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.groceries.splice(req.params.id, 1);
    user.save(function (err) {
      res.redirect('/')
    })
  })
}
