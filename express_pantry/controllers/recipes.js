var Recipe = require('../models/recipe');

module.exports = {
  index,
//   show,
//   new: newGrocery,
//   create,
//   delete: deleteGrocery,
//   edit,
//   update
};

function index(req, res) {
  Recipe.find({}, (err, recipes) => {
    res.render('recipes', {
      recipes,
      time: req.time,
      user: req.user
    })
  });
}
