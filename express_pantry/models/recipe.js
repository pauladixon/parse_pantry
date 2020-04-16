const mongoose = require('mongoose')
const Schema = mongoose.Schema


const recipeSchema = new Schema({
  recipe: {
    type: String,
    require: true
  },
  author: String,
  notes: String,
  pin: {
    type: Boolean,
    default: false,
  },
  source: String,
  servings: Number,
  time: String,
  ingredients: String,
  directions: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)