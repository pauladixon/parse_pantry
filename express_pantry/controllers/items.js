var Item = require('../models/item');

module.exports = {
  show,
  new: newItem,
  create,
  edit,
  update,
  delete: deleteItem
};

function update(req, res) {
  Item.findById(req.params.id, (err, item) => {
    item.item = req.body.item
    item.quantity = req.body.quantity
    item.expires = req.body.expires
    item.notes = req.body.notes
    item.save((err) => {
      res.redirect(`/items/${req.params.id}`);
    })
  })
}

function edit(req, res) {
  Item.findById(req.params.id, (err, item) => {
    res.render(`/items/${req.params.id}/edit`, {
      item,
      user: req.user
    })
  })
}

function show(req, res) {
    Item.findById(req.params.id, (err, item) => {
      res.render('items/show', {
        item,
        user: req.user
      })
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
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const item = new Item(req.body)
  item.save(function(err) {
    if (err) return res.redirect('/')
    res.redirect('/')
  })
}

function deleteItem(req, res, next) {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    item.save(function(err){
      res.redirect('/')
    })
  })
}
