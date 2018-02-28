'use strict';

const read = require('../lib/reader.js');
require('jest');

describe('File Reader Module', function() {
  describe('with improper file paths', function () {
    it('should return an error', function (done) {
      read([`${__dirname}/dont-exist.txt`], function (err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });
  describe('with proper file paths', function () {
    beforeAll((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`,
      ];
      done();
    });

    it('should have the correct order of hex strings', done => {
      var expectedResult = ['4d6572727920616c', '546865697220636f', '496e20726561736f'];

      read(this.paths, function (err, data) {
        console.log('data array:', data);
        expect(err).toEqual(null);
        expect(data[0]).toEqual(expectedResult[0]);
        expect(data[1]).toEqual(expectedResult[1]);
        expect(data[2]).toEqual(expectedResult[2]);
        done();
      });
    });
  });
});
