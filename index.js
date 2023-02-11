const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

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
            choices: ['circle', 'triangle', 'square']
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


// function init() {
//     inquirer.prompt(questions)
//     .then(response =>{
//         console.log(response);
//         const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
//         writeToFile('logo.svg', circle.render())
//     }) 
// }


function shapeChoice() {
    if (shape === circle) {
        console.log(response);
        const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
        writeToFile('logo.svg', circle.render())
    }
    else {
        if (shape === square) {
            console.log(response);
            const square = new Square(response.logo, response.textcolor, response.shapecolor);
            writeToFile('logo.svg', square.render())
        }
        else {
            (shape === triangle)
            console.log(response);
            const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('logo.svg', triangle.render())
        }
    }
}

function init() {
    inquirer.prompt(questions)
        .then((response) => {
        shapeChoice(response);
    })
   }

   init();





// return writeFile(
//     join(__dirname, '..', 'examples', 'logo.svg', circle.render()),
//     // createDocument(this.title, this.tasks)  from mini project
//   );



// .then(() => console.log('Generated logo.svg'))
// .catch((err) => {
//   console.log(err);
//   console.log('Oops. Something went wrong.');
// });

