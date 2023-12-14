import inquirer from 'inquirer';

async function importModules() {
    const fs = await import('fs');
    const shapesModule = await import('./lib/shape.js');
    return { fs, ...shapesModule };
}

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