var Grocery = require('../models/grocery');
var Item = require('../models/item');

module.exports = {
  index
};

function index(req, res) {
  const iPromise = () => new Promise((resolve, reject) => {
      Item.find({}, (err, items) => {
      if (err) {
        return reject(err)
      } else return resolve(items)
    })
  })
  const gPromise = () => new Promise((resolve, reject) => {
      Grocery.find({}, (err, groceries) => {
      if (err) {
        return reject(err)
      } else return resolve(groceries)
    })
  })
  Promise.all([gPromise, iPromise]).then(
    res.render('index', {
      items: {},
      groceries: {},
      time: req.time,
      user: req.user,
      title: 'parse pantry' 
    })
  )
}


// function index(req, res) {
//   const iPromise = Item.find({}, (err, items) => {
//     return items
//   })
//   const gPromise = Grocery.find({}, (err, groceries) => {
//     return groceries
//   })
//   Promise.all([gPromise, iPromise]).then(
//     res.render('index', {
//       items: {},
//       groceries: {},
//       time: req.time,
//       user: req.user,
//       title: 'parse pantry' 
//     })
//   )
// }