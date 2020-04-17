const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
  recipe: {
    type: String,
    require: true
  },
  author: String,
  source: String,
  servings: Number,
  time: String,
  ingredients: String,
  directions: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)