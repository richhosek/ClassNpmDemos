// packages to be installed

// npm install --global opn-cli
// npm install node-cmd
// npm install beeper

var cmd=require('node-cmd');

var beeper = require('beeper');

cmd.run('opn http://www.google.com');

beeper();


 