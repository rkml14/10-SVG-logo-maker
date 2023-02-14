//required libraries for application to run
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

//Inquirer prompt of questions to the user for 3 characters, text colour, shape colour & shape choice 
const questions =
    [
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',
            name: 'logo',
            validate: logoLength,
        },
        {
            type: 'input',
            message: 'Please enter a VALID color keyword or VALID hexadecimal number for your TEXT colour:',
            name: 'textcolor',
            validate: isValidHexaCode,
        },
        {
            type: 'list',
            message: 'Please choose one of the following shapes:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Please enter a VALID color keyword or VALID hexadecimal number for your SHAPE colour:',
            name: 'shapecolor',
            validate: isValidHexaCode,
        },
    ]

function logoLength(response) {
if (!response) {
    return "Please enter a valid response";
    }
if (response.length > 3) {
    return "The logo must be between 1 to 3 characters";
}
return true;
}

var colorList = ['red', 'blue', 'white', 'green'];  //finish this off 

//trying to work out this function to test for hex code
function isValidHexaCode(response) {
    // Regex to check valid hexadecimalColor_code 
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    // if str is empty return false
    if (!response) {
        return "Please enter a value";
    }

    // Return true if the str matched the ReGex
    if (colorList.includes(response) || regex.test(response) ) {
        return true;
    }
    else {
        return "Please enter a valid hex color";
    }
}

//WriteToFile function for shapeChoice function, along with message for successfully created logo 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg"))
}

//Function to take the response from the inquirer.prompt question, seek the response.shape out of the question array and using a switch statement, render the appropriate shape SGV.   case is a string, so need to make sure that I match to that out of the question array, and not try to declare it as a variable   the logo will be created under the examples folder using writeFile 
function shapeChoice(response) {
    switch (response.shape) {
        case 'circle':
            const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./examples/logo.svg', circle.render())
            break;
        case 'triangle':
            const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./examples/logo.svg', triangle.render())
            break;
        case 'square':
            const square = new Square(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./examples/logo.svg', square.render())
            break;
    }
}

//init function, calls inquirer.prompt of questions, and uses the responses as the parameter for shapeChoice function 
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            isValidHexaCode(response);
            shapeChoice(response);
        })

}

init();


