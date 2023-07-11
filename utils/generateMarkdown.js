//this section is my self made mess that contains all the weird fussy stuff to dynamically generate the readme based on which sections and table of contents the user selects in the intial set of prompt questions

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

//calls the rendertoc funct and actually returns the string to use in generating the md file and proper links to sections
function generateTOC(toc) {
  const tocArray = renderTOC(toc);
  //returns each item in the array as a string with a link to the section, joined w/ new line
  return tocArray.map((item) => {
    return `* [${item}](#${item.toLowerCase()})`;
  }).join('\n');
}

//render the sections of readme based on toc selection, because passing temp literals, need to pass data obj and specific data.toc
function renderSections(data, toc) {
  //call rendertoc to get array of sections to include
  const tocArray = renderTOC(toc);
  //cuz it's unknown what the user selects, sections starts empty
  let sections = '';
  //loop through the array and add the appropriate section to the sections string
  for (let i = 0; i < tocArray.length; i++) {
    //only exception to format is the license section, calls the renderlicense function
    if (tocArray[i] == 'License') {
      sections += `${renderLicenseSection(data.license)} \n`;
    } else {
      sections += `\n ## ${tocArray[i]} \n \n ${data[tocArray[i].toLowerCase()]} \n`;
    }
  }
  //returns the concat string to plug into gen md funct
  return sections;
};

//here on, is starter code and the intended to do list outside of my craziness

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `https://img.shields.io/badge/license-${license}-green`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `https://opensource.org/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else { //returns license section with the opensource link embedded in the license name
    return ` \n ## License \n \n This project is licensed under the ![${license}](${renderLicenseLink(license)}) license. \n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //calling the generateTOC function to get the table of contents
  const table = generateTOC(data.toc);
  //calling the renderSections function to create sections of readme based on toc select
  const sections = renderSections(data, data.toc);
  //calling the renderLicenseBadge function to get the badge for the license
  const licenseBadge = renderLicenseBadge(data.license);


  return `
  # Title: ${data.title}

  ![License: ${data.license}](${licenseBadge})

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
    
${table}
  
  ${sections}

  ## Screenshot or Video Demo of Application

  ![Screenshot or Video Demo of Application](${data.screenshot})

  ## Github Repo Link

  ![Github Repo Link](https://github.com/${data.github}/${data.repolink})

  ## Live Link of Deployed Application

  ![Live Link of Deployed Application](${data.livelink})
  
  ## Questions
  If you have any questions, you can contact me on Github (https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
