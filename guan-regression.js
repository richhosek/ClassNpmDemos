//Guan

//powerful data analysis and plotting node library
var d3 = require("d3");
//a way to calculate covariance matrix
var cov = require("compute-covariance");
var plotly = require('plotly')("heguanelvis", "tkebc9VeKmLR1v43NWZK")

var beta = 2;
var a = 0;
var b = 10;
var xs = [];
var ys = [];
var betaHats = [];
for (var i = 0; i < 1000; i++) {
    var x, y, epsilon
    x = d3.randomUniform(a, b)();
    epsilon = d3.randomNormal(0, 3)();
    y = beta * x + epsilon;
    xs.push(x);
    ys.push(y);
}

//Simulate betahats for 1000 times
for (var i = 2; i <= 1001; i++) {
    var mat
    mat = cov(xs.slice(i), ys.slice(i));
    betaHat = mat[0][1] / mat[0][0];
    betaHats.push(betaHat);
}
avgBetaHat = d3.mean(betaHats)
var yHat = [];
xs.forEach(function (point) {
    yHat.push(point*avgBetaHat);
});

//Plotly will store the scatterplot in personal account
var trace1 = {
    x: xs,
    y: ys,
    mode: "markers",
    type: "scatter"
};
var trace2 = {
    x: xs,
    y: yHat,
    type: "line"
};
var data = [trace1, trace2];
var graphOptions = { filename: "basic-line", fileopt: "overwrite" };
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});





