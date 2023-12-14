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
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for logo text:',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword/hex):',
        },
        {
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

    return answers;
}