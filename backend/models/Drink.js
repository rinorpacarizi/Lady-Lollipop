const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let drinkSchema = new Schema({
  name: {
    type: String
  },
  picture: {
    type: String
  },
  Price: {
    type: Number
  },
  Stock: {
    type: Number
  },
  Description: {
    type: String
  },
  Ingridients: {
    type: String
  },

}, {
  collection: 'drink'
})
module.exports = mongoose.model('Drink', drinkSchema)
