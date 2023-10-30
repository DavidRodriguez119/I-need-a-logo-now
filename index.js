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

const answers = ``;

const init = async () => {
    answers = await inquirer.prompt(questions);
    console.log(answers);
    if (answers.type === `Triangle`) {
        createTriangle();
    } else if (answers.type === `Circle`){
        createCircle();
    } else if (answers.type === `Square`){
        createSquare();
    };
};

const createTriangle = () => {

};

const createCircle = () => {

};

const createSquare = () => {

};


init();