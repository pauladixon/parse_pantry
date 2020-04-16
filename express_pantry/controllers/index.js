const Item = require('../models/item')
const Grocery = require('../models/grocery')
const Recipe = require('../models/recipe')

module.exports = {
  index
}

const iPromise = Item.find((err, items) => {
  return items
})
const gPromise = Grocery.find((err, groceries) => {
  return groceries
})
const rPromise = Recipe.find((err, recipes) => {
  return recipes
})

function index(req, res) {
  Promise.all([iPromise, gPromise, rPromise]).then((values) => {
    res.render('index', {
      items: values[0], 
      groceries: values[1],
      recipes: values[2],
      time: req.time,
      user: req.user,
      title: 'parse pantry' 
    })
  })
}