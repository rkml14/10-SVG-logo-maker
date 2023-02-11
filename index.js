const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const { join } = require('path');
const { writeFile } = require('fs/promises');

// const path = require('path');
// const filePath = path.join(__dirname, '/examples');


const questions =
    [
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',   //going to need failure check here
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg"))

}


//Function to take the response from the inquirer.prompt question, seek the response.shape out of the question array and using a switch statement, render the appropriate shape SGV.   case is a string, so need to make sure that I match to that out of the question array, and not try to declare it as a variable 
function shapeChoice(response) {
    switch (response.shape) {
        case 'circle':
            const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
            writeFile(
                join(__dirname, '..', '10-SVG-logo-maker/examples', 'logo.sgv'),
                circle.render())
            break;
        case 'triangle':
            const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('logo.svg', triangle.render())
            break;
        case 'square':
            const square = new Square(response.logo, response.textcolor, response.shapecolor);
            writeToFile('logo.svg', square.render())
            break;
    }
}






//     join(__dirname, '..', 'examples', 'logo.svg', circle.render()), 
     // createDocument(this.title, this.tasks)  from mini project


function init() {
    inquirer.prompt(questions)
        .then((response) => {
            shapeChoice(response);
        })
}

init();





// function init() {
//     inquirer.prompt(questions)
//     .then(response =>{
//         console.log(response);
//         const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
//         writeToFile('logo.svg', circle.render())
//     })
// }










// return writeFile(
//     join(__dirname, '..', 'examples', 'logo.svg', circle.render()),
//     // createDocument(this.title, this.tasks)  from mini project
//   );



// .then(() => console.log('Generated logo.svg'))
// .catch((err) => {
//   console.log(err);
//   console.log('Oops. Something went wrong.');
// });

