// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if(license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if(license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if(license === 'GNU') {
    return '[GNU License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if(license === 'Apache') {
    return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `This project uses the license ${license}. ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## Description
          ${renderLicenseBadge(data.license)}
          ${data.description}
          ## Table of Contents
          * [Installation](#installation)
          * [Usage](#usage)
          * [Contributing](#contributing)
          * [Tests](#tests)
          * [License](#license)
          * [Questions](#questions)
          ## Installation
          ${data.installation}
          ## Usage
          ${data.usage}
          ## Contributing
          ${data.contributing}
          ## Tests
          ${data.tests}
          ## License
          ${renderLicenseSection(data.license)}
          ## Questions
          Link to my GitHub profile: ${data.username}
          If you have any questions, please send me an email at: ${data.email}
`;
}

module.exports = generateMarkdown;