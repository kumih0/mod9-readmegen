const inquirer = require('inquirer');
//render table of contents
function renderTOC(toc) {
    let tocArray = [];
    if (toc == 'undefined' || toc == '') {
      tocArray = ['Installation', 'Usage', 'License', 'Contributing', 'Tests'];
    } else {
      toc.forEach(element => {
        tocArray.push(element);
      });
    }
    console.log(tocArray);
    return tocArray;
  };
  
  function generateTOC(toc) {
    const tocArray = renderTOC(toc);
    return tocArray.map((item) => {
        return `* [${item}](#${item.toLowerCase()})`;
        }).join('\n');
  }

// TODO: Create an array of questions for user input
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [

      {
        type: 'checkbox',
        message: 'Select what to include in table of contents:',
        choices:[
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
];

inquirer.prompt(questions).then((response) => {
    const tocwut = generateTOC(response.toc);
    console.log(response.toc, typeof response.toc);
    console.log(tocwut, typeof tocwut);


});

