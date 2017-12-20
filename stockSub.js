const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSubSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: { type: String, required: true },
  close: { type: Number, required: true },
  volume: { type: Number, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true }
});

module.exports = stockSubSchema;
