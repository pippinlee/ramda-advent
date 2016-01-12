'use strict';

var _Ramda = require('Ramda');

var _Ramda2 = _interopRequireDefault(_Ramda);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

 Problem 4: http://adventofcode.com/day/4

*/

var input = 'iwrupvqb';

// generate 1->500k
var five = _Ramda2.default.range(8000000, 12000000);

// append input to each number
var listInputs = _Ramda2.default.map(function (a) {
  return input + a;
}, five);

// transform to create new list of md5 hashes
var hashed = _Ramda2.default.map(_md2.default, listInputs);

// trims first 5 characters
var hashTrim = _Ramda2.default.map(function (x) {
  return _Ramda2.default.remove(6, 36, x);
}, hashed);

// find first occurance of '00000' indexof
var zeros = _Ramda2.default.indexOf(['0', '0', '0', '0', '0', '0'], hashTrim);
console.log('first hash begin with 000000: ' + five[zeros]);