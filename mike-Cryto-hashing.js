var cryptoHash = require('crypto-hashing')
var buffer = new Buffer('Hello world!')
console.log(cryptoHash('hash256', buffer).toString('hex'))

