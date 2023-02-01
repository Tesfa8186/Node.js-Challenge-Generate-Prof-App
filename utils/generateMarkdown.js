// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  if(license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }

  if(license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

  if(license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0"
  }

  if(license == "ISC") {
    return "https://opensource.org/licenses/ISC"
  }

  if(license == "MIT") {
    return "https://opensource.org/licenses/MIT"
  }

  if(license == "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0"
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  ${answers.contents}
  
  ## Installation
   ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}
          
  ## Test
  ${answers.test}
  
  ## License
  ${answers.license}`;
}

module.exports = generateMarkdown;
