const mongoose = require('mongoose')
const Schema = mongoose.Schema

const grocerySchema = new Schema({
  item: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Grocery', grocerySchema)