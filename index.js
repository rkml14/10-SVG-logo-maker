const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');

const questions =
    [
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',
            name: 'logo',
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your TEXT colour:',
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'Please choose one of the following shapes:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your SHAPE colour:',
            name: 'shapecolor',
        },
    ]

    function writeToFile(fileName, data) {
  

        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): console.log("Generated logo.svg"))
    
}

function init() {
    inquirer.prompt(questions)
    .then(response =>{
        console.log(response);
        const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
        // let readText = utils(response)
        writeToFile('logo.svg', circle.render())
    }) 
}

init();