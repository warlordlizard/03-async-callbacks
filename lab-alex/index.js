'use strict';

const read = require('./lib/reader.js');

var paths = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];
read(paths, function(err, data) {
  if(err) throw err;
  console.log(data.slice(0,8));
  console.log(data.slice(0,8).toString('utf8'));
});