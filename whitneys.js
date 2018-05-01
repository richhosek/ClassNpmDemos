// require('q').config();
var http = require("http");
var url = require("url");

http.get(url.parse("http://google.com/"), function (res) {
    console.log(res.statusCode);  // maybe 302
});