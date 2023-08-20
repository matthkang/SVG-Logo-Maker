// packages needed for application
const inquirer = require('inquirer')
const fs = require('fs')

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

// prompt user from list of questions
// create SVG file based on answers
inquirer.prompt(questions)
    .then((answers) => {
        if (answers.shape === 'square') {
            const Square = require('./lib/square.js');
            const square = new Square();
            square.setText(answers.text);
            square.setTextColor(answers.textColor);
            square.setShape(answers.shape);
            square.setShapeColor(answers.shapeColor);

            svg = square.renderSvg();
        }
        else if (answers.shape === 'circle') {
            const Circle = require('./lib/circle.js');
            const circle = new Circle();
            circle.setText(answers.text);
            circle.setTextColor(answers.textColor);
            circle.setShape(answers.shape);
            circle.setShapeColor(answers.shapeColor);

            svg = circle.renderSvg();
        }
        else if (answers.shape === 'triangle') {
            const Triangle = require('./lib/triangle.js');
            const triangle = new Triangle();
            triangle.setText(answers.text);
            triangle.setTextColor(answers.textColor);
            triangle.setShape(answers.shape);
            triangle.setShapeColor(answers.shapeColor);

            svg = triangle.renderSvg();
        }
        createSvg('./examples/logo.svg', svg);
    })

// create a function to write README file
function createSvg(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
}

// create a function to initialize app
function init() {
}

// Function call to initialize app
init();