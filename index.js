// "import inquirer" is the package I use for creating interactive questions in the command-line.
import inquirer from 'inquirer';

async function importModules() {
    //imports the 'fs' module to for handling file system operations.
    const fs = await import('fs');
    //imports the shape module fom the the file path './lib/shape.js'
    const shapesModule = await import('./lib/shape.js');
    // Returns an object that contains both imported modules, with 'fs' and the exports from 'shapesModule'. 
    return { fs, ...shapesModule };
}
// Asynchronously prompts the user for input using Inquirer.
async function promptUser() {
     // Waiting for user to answer the series of quetions. 
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for logo text:',
            //Ensures that the input is 3 characters or less.
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword/hex):',
        },
        {
             // Dropdown list to select the shape.
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color (keyword/hex):',
        }
    ]);
    // Returns the user's answers to be used elsewhere in the script.
    return answers;
}

// This will generate an SVG string based in the user's input.
function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeObj;
     // A switch statement to determine which shape object to create and with its sepcified color.
    switch (shape) {
        case 'Circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeObj = new Square(shapeColor);
            break;
        default:
            throw new Error('Unknown shape type');
    }
    // Creates an SVG content string using template literals.
    // It inputs the shape and text based on the users input.
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeObj.render()}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
    // Returns the SVG content.
    return svgContent;
}
// Imports the shape classes (Triangle, Circle, Square) from the 'shape.js' file. 
import { Triangle, Circle, Square } from './lib/shape.js';
