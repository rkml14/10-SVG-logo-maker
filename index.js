//required libraries for application to run
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

//Inquirer prompt of questions to the user for 3 characters for logo, text colour, shape colour & shape choice, along with validation functions for text length, text & shape colour
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
            message: 'Please enter a CSS3 colour keyword or a hexadecimal number for your TEXT colour:',
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
            message: 'Please enter a CSS3 colour keyword or a hexadecimal number for your SHAPE colour:',
            name: 'shapecolor',
            validate: isValidHexaCode,
        },
    ]

//Function to test for logo length, must neither be null or over 3 characters     
function logoLength(response) {
if (!response) {
    return "Please enter a valid response";
    }
if (response.length > 3) {
    return "The logo must be between 1 to 3 characters";
}
return true;
}

//Array of the current valid CSS3 colour names to be used in function isValidHexaCode
var colorList = ['Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse',
'Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGreen','DarkKhaki','DarkMagenta',
'DarkOliveGreen','Darkorange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkTurquoise','DarkViolet','DeepPink',
'DeepSkyBlue','DimGray','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Green','GreenYellow',
'HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow', 'LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen', 'Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise', 'MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod', 'PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','Red','RosyBrown','RoyalBlue','SaddleBrown', 'Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle', 'Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen',
];  

//Function to test for colours for both textcolor & shapecolor 
function isValidHexaCode(response) {
    // Regex to check for valid hexadecimalColor_code 
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    // If response is null, prompts user to enter a colour value
    if (!response) {
        return "Please enter a valid colour value";
    }
    // Returns true if the response matches either the colorList or the regex, else prompts the user to enter a valid colour
    if (colorList.includes(response) || regex.test(response) ) {
        return true;
    }
    else {
        return "Please enter a valid colour value ";
    }
}

//WriteToFile function for shapeChoice function, along with message for successfully created logo 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg"))
}

//Function to take the response from the inquirer.prompt question, seek the response.shape out of the question array and using a switch statement, render the appropriate shape SGV.   As case is a string,  need to make sure that it matches to that out of the question array.  The logo will be created under the examples folder using writeToFile 
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

//init function, calls inquirer.prompt of questions, and uses the responses as the parameter for isValidHexaCode & shapeChoice function 
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            isValidHexaCode(response);
            shapeChoice(response);
        })

}

init();


