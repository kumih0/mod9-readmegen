//render table of contents
function renderTOC(TOC) {
  if (TOC) {
    
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
//https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
//https://img.shields.io/badge/license-MIT-green
//https://img.shields.io/badge/license-Apache%202-blue
function renderLicenseBadge(license) {
    if (license === 'none') {
      return '';
    } else{
      return `https://img.shields.io/badge/license-${license}-green`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'none') {
      return '';
    } else {
      
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
    
  ## Contributing

  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  ${data.tests}
  
  ##Screenshot

  ${data.screenshot}

  ##Live Link

   ${data.livelink}
  
  ## Questions
  If you have any questions, you can contact me on Github (https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
