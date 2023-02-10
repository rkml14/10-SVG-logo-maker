const inquirer = require('inquirer');
const fs = require('fs');

const questions =
    [
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',
            name: 'logoInitals',
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your TEXT colour:',
            name: 'textColor',
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
            name: 'shapeColor',
        },
    ]

    function writeToFile(fileName, data) {
  

        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): console.log("Generated logo.svg"))
    
}

function init() {
    inquirer.prompt(questions)
    .then(response =>{
        let readText = utils(response)
        writeToFile('logo.svg', readText)
    }) 
}

init();