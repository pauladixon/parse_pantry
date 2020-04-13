var Item = require('../models/item');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update
};

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Item.update(req.params.id, req.body);
  res.redirect('/items');
}

function edit(req, res) {
  res.render('items/edit', {
    item: Item.getOne(req.params.id),
    idx: req.params.id
  });
}

function deleteItem(req, res) {
  Item.deleteOne(req.params.id);
  res.redirect('/items');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Item.create(req.body);
  res.redirect('/items', {
    time: req.time,
    user: req.user
  });
}

function newItem(req, res) {
  res.render('items/new', {
    time: req.time,
    user: req.user
  });
}

function index(req, res) {
  console.log("in index")
  res.render('items/index', {
    items: Item.getAll(),
    time: req.time,
    user: req.user
  });
}

function show(req, res) {
  res.render('items/show', {
    item: Item.getOne(req.params.id),
    itemNum: parseInt(req.params.id) + 1
  });
}
