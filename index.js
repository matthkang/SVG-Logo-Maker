// packages needed for application
const inquirer = require('inquirer')
const fs = require('fs')
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');

// check if text is <= 3
function confirmAnswerValidator(text) {
    if (text.length > 3) {
        return '3 character limit!';
    }
    return true;
};

// create an array of questions for user input
const questions = [
    { message: 'What is the text of the SVG logo? (3 char limit)', type: 'input', name: 'text', validate: confirmAnswerValidator },
    { message: 'What is the color of the text? (keyword or hexadecimal number)', type: 'input', name: 'textColor' },
    { message: 'Choose a shape for the logo:', type: 'list', choices: ['circle', 'triangle', 'square'], name: 'shape' },
    { message: 'What is the color of the shape? (keyword or hexadecimal number)', type: 'input', name: 'shapeColor' },
];

// svg object to create
let svg;


// create a function to write README file
function createSvg(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
}

// create a function to initialize app
function init() {
    // prompt user from list of questions
    // create SVG file based on answers
    inquirer.prompt(questions)
        .then((answers) => {

            let shape = new Triangle(answers);

            if (answers.shape === 'square') {
                shape = new Square(answers);
            }
            else if (answers.shape === 'circle') {
                shape = new Circle(answers);
            }

            createSvg('./examples/logo.svg', shape.renderSvg());
        })

}

// Function call to initialize app
init();