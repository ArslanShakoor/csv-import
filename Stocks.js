var mongoose = require('mongoose');
const stockSubSchema = require('./stockSub');

var stockSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  symbol: { type: String, unique: true, required: true, dropDups: true },
  stock: [stockSubSchema]
});

var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
