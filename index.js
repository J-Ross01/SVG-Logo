// "Import inquirer" is the package I use for creating interactive questions in the command-line.
import inquirer from 'inquirer';

async function importModules() {
    //Imports the 'fs' module to for handling file system operations.
    const fs = await import('fs');
    //Imports the shape module fom the the file path './lib/shape.js'
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
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObj.render()}
        <text 
            x="50%" 
            y="50%" 
            dominant-baseline="middle" 
            text-anchor="middle" 
            fill="${textColor}" 
            style="font-family: Arial, sans-serif; font-size: 40px;">
            ${text}
        </text>
    </svg>
    `;
}

async function main() {
    try {
        const { fs, Triangle, Circle, Square } = await importModules();// Retrieves modules and shape classes.
        const userInput = await promptUser(); //Collects user inputs through prompts. 
        const svg = generateSVG(userInput, { Triangle, Circle, Square }); //Generates SVG after user answers prompt questions. 
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SVG Logo Example</title>
</head>
<body>
<div id="logo-container" style="display: flex; align-items: center; justify-content: center;">
    ${svg}
</div>
</body>
</html>
        `;
        await fs.promises.writeFile('./index.html', htmlContent, 'utf8'); //Displays SVG content in HTML file.
        console.log('Generated logo.svg'); //Success message. 
    } catch (error) {
        console.error('An error occurred:', error.message); // Logs any errors that occur during execution.
    }
}

// Imports the shape classes (Triangle, Circle, Square) from the 'shape.js' file. 
import { Triangle, Circle, Square } from './lib/shape.js';

main();  // Calls the main function to start the prompts.