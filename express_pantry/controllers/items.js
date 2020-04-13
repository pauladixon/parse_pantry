var Item = require('../models/item');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  // delete: deleteItem,
  edit,
  update
};

function index(req, res) {
  Item.find({}, (err, items) => {
    res.render('items/index', {
      items,
      time: req.time,
      user: req.user
    })
  });
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
  res.render('items', {
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
    if (err) return res.redirect('/items')
    res.redirect('/items')
  })
}

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Item.update(req.params.id, req.body);
  res.redirect('/items');
}

function edit(req, res) {
  res.render('items/edit', {
    item: Item.getOne(req.params.id),
    idx: req.params.id,
    user: req.user
  });
}

// function deleteItem(req, res) {
//   Item.deleteOne(req.params.id);
//   res.redirect('/items');
// }