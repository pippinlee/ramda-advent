/*

 Problem 4: http://adventofcode.com/day/4

*/

import R from 'Ramda'
import md5 from 'md5'

const input = 'iwrupvqb'

// generate 1->500k
const five = R.range(1,500000)

// append input to each number
const listInputs = R.map(a => input + a, five)

// transform to create new list of md5 hashes
const hashed = R.map(md5, listInputs)

// trims first 5 characters
const hashTrim = R.map( x => R.remove(5,36, x), hashed)

// find first occurance of '00000' indexof
const zeros = R.indexOf(['0','0','0','0','0'], hashTrim)
console.log('first hash begin with 00000: ' + five[zeros])



