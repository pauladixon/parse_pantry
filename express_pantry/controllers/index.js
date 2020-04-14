const Item = require('../models/item')
const Grocery = require('../models/grocery')

module.exports = {
  index
}

// const iPromise = () => new Promise((resolve, reject) => {
//     Item.find({}, (err, items) => {
//     if (err) {
//       return reject(err)
//     } else return items
//   })
// })

// const gPromise = () => new Promise((resolve, reject) => {
//     Grocery.find({}, (err, groceries) => {
//     if (err) {
//       return reject(err)
//     } else return groceries
//   })
// })

const iPromise = Item.find((err, items) => {
  return items
})
const gPromise = Grocery.find((err, groceries) => {
  return groceries
})

function index(req, res) {
  Promise.all([gPromise, iPromise]).then((items, groceries) => {
    res.render('index', {
      items,
      groceries,
      time: req.time,
      user: req.user,
      title: 'parse pantry' 
    })
  })
}