const Recipe = require('../models/recipe');

module.exports = {
  index,
  show,
  new: newRecipe,
  create,
  delete: deleteRecipe,
  edit,
  update,
  // addtoIndex,
};

function index(req, res) {
  Recipe.find({}, function(err, recipes) {
    res.render('recipes/index', { 
      title: 'all recipes',
      recipes,
      user: req.user
    });
  });
}

function show(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    res.render('recipes/show', {
      recipe,
      user: req.user
    })
})
}

function newRecipe(req, res) {
  res.render('recipes/new', {
    title: 'add recipe',
    time: req.time,
    user: req.user
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const ingredient = {
    ingredient: req.body.ingredient,
    quantity: req.body.quantity,
    unit: req.body.unit
  }
  const recipe = new Recipe(req.body)
  recipe.ingredients.push(ingredient)
  recipe.save(function(err) {
    if (err) return res.redirect('/recipes/new')
    res.redirect('/recipes')
  })
}

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Recipe.update(req.params.id, req.body);
  res.redirect(`/recipes/${recipe._id}`);
}

function edit(req, res) {
  res.render('recipes/edit', {
    recipe: Recipe.getOne(req.params.id),
    idx: req.params.id,
    user: req.user
  });
}

function deleteRecipe(req, res, next) {
  Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
    recipe.save(function(err){
      res.redirect('/recipes')
    })
  })
}


// function addtoIndex(req, res) {
//   Recipe.findById(req.params.id, function (err, recipe) {
//     recipe.recipes.push(req.body.performerId);
//     recipe.save(function (err) {
//       res.redirect('/');
//     });
//   });
// }