var Grocery = require('../models/grocery');

module.exports = {
  // index,
  show,
  new: newGrocery,
  create,
  delete: deleteGrocery,
  edit,
  update
};

function show(req, res) {
    Grocery.findById(req.params.id, (err, grocery) => {
      res.render('groceries/show', {
        grocery,
        user: req.user
      })
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
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const grocery = new Grocery(req.body)
  grocery.save(function(err) {
    if (err) return res.redirect('/')
    res.redirect('/')
  })
}

function update(req, res) {
  Grocery.findById(req.params.id, (err, grocery) => {
    grocery.grocery = req.body.grocery
    grocery.quantity = req.body.quantity
    grocery.notes = req.body.notes
    grocery.save((err) => {
      res.redirect(`/groceries/${req.params.id}`);
    })
  })
}

function edit(req, res) {
  Grocery.findById(req.params.id, (err, grocery) => {
    res.render(`./groceries/edit`, {
      grocery,
      user: req.user
    })
  })
}

function deleteGrocery(req, res, next) {
  Grocery.findByIdAndRemove(req.params.id, (err, grocery) => {
    grocery.save(function(err){
      res.redirect('/')
    })
  })
}
