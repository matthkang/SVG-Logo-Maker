// packages needed for application
const inquirer = require('inquirer')
const fs = require('fs')

// create an array of questions for user input
const questions = [
    { message: 'What is the text of the SVG logo? (3 char limit)', type: 'input', name: 'text' },
    { message: 'What is the color of the text? (keyword or hexadecimal number)', type: 'input', name: 'textColor' },
    { message: 'Choose a shape for the logo:', type: 'list', choices: ['circle', 'triangle', 'square'], name: 'shape' },
    { message: 'What is the color of the shape? (keyword or hexadecimal number)', type: 'input', name: 'shapeColor' },
];

// prompt user from list of questions
// create README.md file based on answers
inquirer.prompt(questions)
    .then((answers) => {
        if (answers.shape === 'square') {
            const Square = require('./lib/square.js');
            const square = new Square();
            square.setText(answers.text);
            square.setTextColor(answers.textColor);
            square.setShape(answers.shape);
            square.setShapeColor(answers.shapeColor);

            const svg = square.renderSvg();
            createSvg('./examples/square.svg', svg);
        }
        else if (answers.shape === 'circle'){
            const Circle = require('./lib/circle.js');
            const circle = new Circle();
            circle.setText(answers.text);
            circle.setTextColor(answers.textColor);
            circle.setShape(answers.shape);
            circle.setShapeColor(answers.shapeColor);

            const svg = circle.renderSvg();
            createSvg('./examples/circle.svg', svg);
        }
    })

// create a function to write README file
function createSvg(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
}

// create a function to initialize app
function init() {
}

// Function call to initialize app
init();