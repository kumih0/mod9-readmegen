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

//render the sections of readme based on toc selection
function renderSections(data, toc) {
  const tocArray = renderTOC(toc);
  let sections = '';

  for (let i = 0; i < tocArray.length; i++) {
    if (tocArray[i] == 'License') {
      sections += `${renderLicenseSection(data.license)} \n`;
    } else {
      sections += `\n ## ${tocArray[i]} \n \n ${data[tocArray[i].toLowerCase()]} \n`;
    }
  }
  return sections;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
//https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
//https://img.shields.io/badge/license-MIT-green
//https://img.shields.io/badge/license-Apache%202-blue
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
  } else {
    return ` ## License \n This project is licensed under the ![${license}](${renderLicenseLink(license)}) license. \n`;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const table = generateTOC(data.toc);
  console.log(table);
  console.log(data.toc);
  const sections = renderSections(data, data.toc);

  console.log(sections);
  const licenseBadge = renderLicenseBadge(data.license);


  return `
  # Title
  # ${data.title}

  ![License: ${data.license}](${licenseBadge})

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
    
  ${table}
  
  ${sections}
  
  ## Questions
  If you have any questions, you can contact me on Github (https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
