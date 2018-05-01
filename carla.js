var inquirer = require("inquirer");
var dadJokes = require("@mikemcbride/dad-jokes");
var fact = require("random-fact");
var fortuneCookie = require("fortune-cookie");

function runProgram(greeting, program) {
    console.log(greeting);
    program();
}

function mainMenu() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "What would you like to do?",
            choices: ["Laugh", "Learn", "Inspire", "Nothing - my boredom is cured!"]
        }
    ]).then(function(response) {
        if (response.command === "Laugh") {
            console.log(`\n   (☞ﾟヮﾟ)☞ ${dadJokes.random()} ☜(ﾟヮﾟ☜)\n`);
        }
        
        else if (response.command === "Learn") {
            fact();
        }

        else if (response.command === "Inspire") {
            tellFortune();
        }

        else if (response.command === "Nothing - my boredom is cured!") {
            return;
        }

        runProgram("Still bored?", mainMenu);
    })
}

function tellFortune() {
    console.log("\nYour fortune cookie says...")
    var randomFortune = Math.floor(Math.random() * fortuneCookie.length);
    console.log(`\n      ***\n    *******\n   *********\n   ****** ${fortuneCookie[randomFortune]}\n    *******\n      ***\n`);
}

runProgram("Welcome to the Boredom Killer app!", mainMenu);