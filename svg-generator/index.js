const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  return userInput;
};

const generateSVG = (userInput) => {
  const draw = SVG().size(300, 200);
  const shape = draw[userInput.shape]().fill(userInput.shapeColor);

  shape.size(100, 100).center(150, 100);
  draw.text(userInput.text).move(125, 90).font({ fill: userInput.textColor });

  draw.save('logo.svg');
  console.log('Generated logo.svg');
};

const main = async () => {
  const userInput = await promptUser();
  generateSVG(userInput);
};

main();