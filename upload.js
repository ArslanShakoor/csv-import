var csv = require('fast-csv');
var mongoose = require('mongoose');
var Stock = require('./stocks');

exports.post = function(req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  var stockFile = req.files.file;
  var symbol = req.body.symbol;
  console.log(symbol);

  var stocks = [];

  csv
    .fromString(stockFile.data.toString(), {
      headers: true,
      ignoreEmpty: true
    })
    .on('data', function(data) {
      data['_id'] = new mongoose.Types.ObjectId();

      stocks.push(data);
    })
    .on('end', function() {
      Stock.create(
        { _id: new mongoose.Types.ObjectId(), symbol: symbol, stock: stocks },
        function(err, documents) {
          if (err) throw err;
          res.send(stocks.length + ' stocks have been successfully uploaded.');
        }
      );
    });
};
