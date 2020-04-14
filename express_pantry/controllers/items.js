var Item = require('../models/item');

module.exports = {
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update
};

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

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Item.update(req.params.id, req.body);
  res.redirect('/');
}

function edit(req, res) {
  res.render('items/edit', {
    item: Item.getOne(req.params.id),
    idx: req.params.id,
    user: req.user
  });
}

function deleteItem(req, res, next) {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    item.save(function(err){
      res.redirect('/')
    })
  })
}
