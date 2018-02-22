'use strict';

const fs = require('fs');
const read = module.exports = function(paths, callback) {
  var result = [];

  
  fs.readFile(paths[0], (err, data) => {
    if (err) return callback (err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(paths[1], (err, data) => {
      if (err) throw err;
      result.push(data.toString('hex', 0, 8));
      fs.readFile(paths[2], (err, data) => {
        if (err) throw err;
        result.push(data.toString('hex', 0, 8));
        console.log('results:', result);

        callback(null, result);
      });
    });
  });
};