const Recipe = require('../models/recipe');

module.exports = {
  index,
  show,
  new: newRecipe,
  create,
  edit,
  update,
  delete: deleteRecipe
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
  const recipe = new Recipe(req.body)
  recipe.save(function(err) {
    if (err) return res.redirect('/recipes/new')
    res.redirect('/recipes')
  })
}

function update(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    recipe.recipe = req.body.recipe
    recipe.author = req.body.author
    recipe.source = req.body.source
    recipe.servings = req.body.servings
    recipe.time = req.body.time
    recipe.ingredients = req.body.ingredients
    recipe.directions = req.body.directions
    recipe.save((err) => {
      res.redirect(`/recipes/${req.params.id}`);
    })
  })
}

function edit(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    res.render(`./recipes/edit`, {
      recipe,
      user: req.user
    })
  })
}

function deleteRecipe(req, res, next) {
  Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
    recipe.save(function(err){
      res.redirect('/recipes')
    })
  })
}