// TODO: Include packages needed for this application
const fs =  require('fs');
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
        choices:[
            {
                name: 'Installation',
                value: 'installation',
                
            },
            {
                name: 'Usage',
                value: 'usage',
            }, 
            {
                name: 'License',
                value: 'license',
            }, 
            {
                name: 'Contributing',
                value: 'contributing',
            }, 
            {
                name: 'Tests',
                value: 'tests',
            }, 
            {
                name: 'Questions',
                value: 'questions',
            }, 
            ],
        default: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        name: 'TOC',
      },
      {
          type: 'input',
          message: 'Add installation instructions:',
          name: 'install',
        },
        {
          type: 'input',
          message: 'Add usage information:',
          name: 'usage',
        },
        {
            type: 'list',
            message: 'Select a license for your project:',
            choices:['MIT', 'Apache 2.0', 'Eclipse', 'BSD', 'none'],
            name: 'license',
          },
          {
            type: 'input',
            message: 'Add contribution guidelines:',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'Add test instructions:',
            name: 'tests',
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
            message: 'Add screenshot link:',
            name: 'screenshot',
          },
          {
            type: 'input',
            message: 'Add Github Live Link:',
            name: 'livelink',
          },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err ? err : 'it works dummy'))
    };

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        writeToFile('READEME.md', data);
    });
}

// Function call to initialize app
init();
