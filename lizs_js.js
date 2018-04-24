var cowsay = require("cowsay")
var weather = require("weather-js")

// Variable that will store the users command.
var whatToSay = process.argv.slice(2,3);
// Variable that will store a city for the weather if the user enters one
var weatherInput = process.argv.slice(3).join(" ");

//User can issue the following commands after entering 'node lizs.js': 1) weather <city name>; 2) quote; fortune

if (whatToSay == "weather") {

    weather.find({search: weatherInput, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        var city = result[0].location.name;
        console.log(city);

        var temp = result[0].current.temperature;
        console.log(temp);

        console.log(cowsay.say({
            text : "It's: " + temp + " °F in " + city,
            e : "0-",
            T : " U"
        }));
      });
}

if (whatToSay == "quote") {
    console.log(cowsay.say({
        text : "Age is something that doesn't matter unless you are cheese. -Luis Bunuel",
        e : "00",
        T : " U"
    }));
}

if (whatToSay == "fortune") {
    console.log(cowsay.say({
        text : "You will make a big mooooove soon.",
        e : "--",
        T : " U"
    }));
}

// console.log(cowsay.say({
// 	text : "I'm a moooodule",
// 	e : "OO",
// 	T : " "
// }));