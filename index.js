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
var colorList = ['aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgrey','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle', 'tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen', ];  

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


