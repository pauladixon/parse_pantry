const items = [
  {item: 'greek yogurt'},
  {item: 'chicken stock'},
  {item: 'brussel sprouts'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, item) {
  items.splice(id, 1, item);
}

function deleteOne(id) {
  items.splice(id, 1);
}

function create(item) {
  items.push(item);
}

function getOne(id) {
  return items[id];
}

function getAll() {
  return items;
}