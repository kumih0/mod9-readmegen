//render table of contents
function renderTOC(toc) {
  toc.forEach(element => {
    console.log(element);
    return `* [${element}](#${element})`
  }
  );
}
//render the sections of readme based on toc selection
function renderSections(data, toc) {
  const tocArray = [];
  toc.forEach(element => {
    console.log(element);
    tocArray.push(element);
  })
  console.log(tocArray);
  let sections = '';

  for (let i = 0; i < tocArray.length; i++) {
    if (tocArray[i] === 'license') {
      sections += ` ${renderLicenseSection(data.license)}`;
    } else {
      sections += `## ${tocArray[i]}
      ${data.tocArray[i]}`;
    }
  }
  return sections;
};
//  * [Installation](#installation)

//   * [Usage](#usage)

//   * [License](#license)

//   * [Contributing](#contributing)

//   * [Tests](#tests)

//   * [Questions](#questions)
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
    return `## License
    This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let table = '';
  if (data.toc) {
    table += renderTOC(data.toc);
  }
  const sections = renderSections(data, data.toc);
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
