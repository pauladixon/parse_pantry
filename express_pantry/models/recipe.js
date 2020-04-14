const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  recipe: {
    type: String,
    require: true
  },
  ingredients: {
    type: String,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)