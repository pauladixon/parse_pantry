const Item = require('../models/item')
const Grocery = require('../models/grocery')
const Recipe = require('../models/recipe')
const User = require('../models/user')

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
const uPromise = User.find((err, users) => {
  return users
})

function index(req, res) {
  Promise.all([iPromise, gPromise, rPromise, uPromise]).then((values) => {
    const payload = values[3]
    console.log(payload)
    res.render('index', {
      items: values[0], 
      groceries: values[1],
      recipes: values[2],
      users: values[3],
      time: req.time,
      user: req.user,
      title: 'parse pantry' 
    })
  })
}