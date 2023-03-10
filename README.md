# 10-SVG-Logo-Maker
  ![](https://img.shields.io/badge/license-mit-blue) 
 ------------------
  ## Description

  The SVG Logo Maker uses the node.js command-line application to take in user input to generate a simple logo that saves as a SVG file.  The application prompts the user to select from one of three shapes (circle, triangle or square) and provide 3 characters for the text of the logo.   The user will be asked to input no more than 3 characters for their logo, and to input either a colour keyword or hexadecimal number for both their text colour & shape colour.  

Things I learned from this application:
* Further understanding of the Inquirer library to collect input from the user
* Using switch statements
* Using the Jest library to run tests on code
* How to use the constructor class, and how to extend it from parent to child
* How to create tests in Jest so that they fail, then pass, and how to construct a testing suite


------------------
## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

  ------------------


  ## Installation

  Download the index.js, lib folder and package.json.  Run the application via the terminal using the command prompts: npm instal to load the libraries, then node index.js to begin the application


  ## Usage

  In the terminal, run the program via the command prompt: node index.js.  Respond to the prompted list of questions.

A link to the video showing the tests running succesfully, as well as creation of 3 different logos along with the validation errors for inproper user input: https://drive.google.com/file/d/1sxktzVdVY9JZJNt9IkN_9_Cru-dAurbq/view


Example of a successful answering of the inquirer prompts & the related SVG logo it produced:

![answered-questions-and-the-created-logo-to-the-questions](./images/creation-of-svg-logo.png)


Examples of the validation errors in the questions that prompt the user to enter valid information.

Logo cannot be null:

![logo-cannot-be-null ](./images/require-valid-logo.png)

Text color must be valid:

![text-colour-must-be-valid](./images/require-valid-colour.png)

Hexadecimal code must be valid:

![shape-colour-must-be-valid-hexadecimal-code](./images/require-valid-color-shape.png)

  ## License

  Application is covered by the MIT License license 

  More information regarding said license can be found at https://choosealicense.com/licenses/mit
 

  ## Contributing 
  If you would like to contribute to this application, please reach out to me via one of the means listed under Questions.
  



  ## Test
The application uses the Jest JavaScript Testing Framework for running the tests on the Shape, Circle, Triangle & Square classes. 

Confirmation that the tests were run successfully:

![confirmation-that-the-tests-were-successful](./images/test_success.png)




  ## Credits

Cassandra Watson https://github.com/cassiewatsonn 
geeksforgeeks.org 
  

## Questions
   Please contact me via one of the following methods: 
   
   * https://github.com/rkml14
   * rkmlawrence@gmail.com
