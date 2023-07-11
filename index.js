// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: 'input',
    message: 'Project Title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter brief description of project:',
    name: 'description',
  },
  {
    type: 'checkbox',
    message: 'Select what to include in table of contents:',
    choices: [
      {
        name: 'Installation',
        value: 'Installation',

      },
      {
        name: 'Usage',
        value: 'Usage',
      },
      {
        name: 'License',
        value: 'License',
      },
      {
        name: 'Contributing',
        value: 'Contributing',
      },
      {
        name: 'Tests',
        value: 'Tests',
      },
    ],
    default: ['Installation', 'Usage', 'License', 'Contributing', 'Tests'],
    name: 'toc',
  },
  {
    type: 'input',
    message: 'Github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Add screenshot or demo link:',
    name: 'screenshot',
  },
  {
    type: 'input',
    message: 'Add Live Link:',
    name: 'livelink',
  },
];

const installq = {
  type: 'input',
  message: 'Add installation instructions:',
  name: 'installation',
}
const usageq = {
  type: 'input',
  message: 'Add usage information:',
  name: 'usage',
}
const licenseq = {
  type: 'list',
  message: 'Select a license for your project:',
  choices: ['MIT', 'Apache 2.0', 'Eclipse', 'BSD', 'none'],
  name: 'license',
}
const contributeq = {
  type: 'input',
  message: 'Add contribution guidelines:',
  name: 'contributing',
}
const testq = {
  type: 'input',
  message: 'Add test instructions:',
  name: 'tests',
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err ? err : 'it works dummy'))
};

//function to check toc answers, and then build an array of follow up prompts accordingly
function generatePrompts(toc) {
  let prompts = [];
  if (toc == 'undefined' || toc == '') {
    prompts = [installq, usageq, licenseq, contributeq, testq];
    return prompts;
  } else {
  toc.includes('Installation') ? prompts.push(installq) : null;
  toc.includes('Usage') ? prompts.push(usageq) : null;
  toc.includes('License') ? prompts.push(licenseq) : null;
  toc.includes('Contributing') ? prompts.push(contributeq) : null;
  toc.includes('Tests') ? prompts.push(testq) : null;
  return prompts;
  }
};

// TODO: Create a function to initialize app
function init() {

//   return inquirer.prompt(questions)
  
//   .then((data) => {
//     writeToFile('README.md', data);
//   });
}

// Function call to initialize app
init();
