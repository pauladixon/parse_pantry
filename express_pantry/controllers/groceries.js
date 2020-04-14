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

// function index(req, res) {
//   Grocery.find({}, (err, groceries) => {
//     res.render('index', {
//       groceries,
//       time: req.time,
//       user: req.user
//     })
//   });
// }

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
  res.render('index', {
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
    if (err) return res.redirect('index')
    res.redirect('index')
  })
}

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Grocery.update(req.params.id, req.body);
  res.redirect('index');
}

function edit(req, res) {
  res.render('groceries/edit', {
    grocery: Grocery.getOne(req.params.id),
    idx: req.params.id,
    user: req.user
  });
}

function deleteGrocery(req, res, next) {
  Grocery.findByIdAndRemove(req.params.id, (err, grocery) => {
    grocery.save(function(err){
      res.redirect('index')
    })
  })
}
