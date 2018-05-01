// packages to be installed

// npm install multi-write-stream

// npm install fs

var casual = require('casual').ro_RO;

var multi = require('multi-write-stream')
var fs = require('fs')

var stream = multi([
    fs.createWriteStream('./file-1.txt'),
    fs.createWriteStream('./file-2.txt'),
    fs.createWriteStream('./file-3.txt'),
    fs.createWriteStream('./file-4.txt')
  ])
  
  stream.write('\nName: '+casual.first_name)
  stream.write('\nAddress 1: '+ casual.address1)
  stream.write('\nAddress 2: '+casual.address2)
  stream.write('\nCity: '+casual.city)
  stream.write('\nZip: '+casual.zip(digits = 5))
  stream.write('\nCountry: '+casual.country)
  stream.write('\nDescription: '+casual.text)
  stream.write('\n------------------------------------------------')




 