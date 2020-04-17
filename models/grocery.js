const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
  grocery: {
    type: String,
    require: true
  },
  quantity: {
    type: String,
  },
  notes: {
    type: String,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Grocery', grocerySchema)