var Item = require('../models/item');
let User = require('../models/user')

module.exports = {
  show,
  new: newItem,
  create,
  edit,
  update,
  delete: deleteItem
};


function show(req, res) {
  User.findById(req.user._id, function(err, user) {
      let item = user.items.id(req.params.id) 
        res.render('items/show', {
          user: req.user,
          item,
      });
  })
}

function newItem(req, res) {
  newItem = new Item()
  res.render('/', {
    time: req.time,
    user: req.user
  });
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.items.push(req.body);
    user.save(function(err) {
      res.redirect('/');
    })
  })
}

function update(req, res) {
  User.findById(req.user._id, function(err, user) {
  let item = user.items.id(req.params.id);
    item.item = req.body.item
    item.quantity = req.body.quantity
    item.expires = req.body.expires
    item.notes = req.body.notes
    user.save((err) => {
      res.redirect(`/items/${req.params.id}`);
    })
  })
} 

function edit(req, res) {
  User.findById(req.user._id, function(err, user) {
    let item = user.items.id(req.params.id) 
      res.render(`./items/edit`, {
        user: req.user,
        item
      })
  })
}

function deleteItem(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.items.splice(req.params.id, 1);
    user.save(function (err) {
      res.redirect('/')
    })
  })
}
