const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: {
    type: String,
    require: true
  },
  quantity: {
    type: String,
  },
  expires: {
    type: String
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)