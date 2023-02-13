//required libraries for application to run
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

//Inquirier prompt of questions to the user for 3 characters, text colour, shape colour & shape choice 
const questions =
    [
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',   
            name: 'logo',
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your TEXT colour:',  //may need failure check for colour
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'Please choose one of the following shapes:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your SHAPE colour:', //may need failure check for colour
            name: 'shapecolor',
        },
    ]

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
            shapeChoice(response);
        })

}

init();


