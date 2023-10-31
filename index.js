// necesssary imports
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Triangle = require(`./lib/Triangle`);
const Circle = require(`./lib/circle`);
const Square = require(`./lib/square`);

// Questions for the user (inquirer)
const questions = [
    {
        type: `input`,
        message: `Please enter THREE characters that you would like to see in your Logo:`,
        name:  `innerText`,
        validate: (answers) => {
            if (answers.length <= 3) {
                return true;
            } else {
                return false;
            };
        }
    },
    {
        type: `input`,
        message: `Please enter a color keyword (OR a hexadecimal number) to apply to the characters:`,
        name:  `textColor`,
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to have?',
        name: 'type',
        choices: [`Triangle`, `Circle`, `Square`],
    },
    {
        type: `input`,
        message: `Please enter a color keyword (OR a hexadecimal number) to apply to the shape:`,
        name:  `shapeColor`
    },
];

// Global Variables
let createShape = ``;
let shapeParameters = {};

// File Path
const filePath = `./examples/logo.svg`

const init = async () => {
    const answers = await inquirer.prompt(questions);
    shapeParameters = {...answers}
    if (shapeParameters.type === `Triangle`) {
        createTriangle();
    } else if (shapeParameters.type === `Circle`){
        createCircle();
    } else if (shapeParameters.type === `Square`){
        createSquare();
    };
    // generage SVG
    fs.writeFile(filePath, createShape, (err) => {
        err ? console.log(err) : console.log('Successfully created .svg file!')
    });
    console.log(createShape);
};

const createTriangle = () => {
    const shape = new Triangle(shapeParameters.innerText, shapeParameters.textColor, shapeParameters.shapeColor);
    createShape = shape.svgCode();
};

const createCircle = () => {
    const shape = new Circle(shapeParameters.innerText, shapeParameters.textColor, shapeParameters.shapeColor);
    createShape = shape.svgCode();
};

const createSquare = () => {
    const shape = new Square(shapeParameters.innerText, shapeParameters.textColor, shapeParameters.shapeColor);
    createShape = shape.svgCode();
};

init();