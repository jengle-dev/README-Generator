const fs = require('fs');
const inquirer = require('inquirer');//getting an 'ERR_REQUIRE_ESM'

// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { };

// TODO: Create a function that returns the license section of README
//see function generateMarkdown
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = '') {
    return ('')
  } else {
    return ('license')
  }
};

renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //README.md template
  const readMeContent = `
    # ${data.title}
    
    ## Description
    ${data.description}
    
    ## Installation
    To run the application, follow these steps for installation:
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Credits
    I am open to collaboration for contributing to updates to this page. Please email me at ${data.email}.

    If any, additional contributors are ${data.credits}. 
    
    ## License
    There is ${data.license} license required for this project.

    ## Project Status
    The current project status is ${data.status}.
    `;
};

// TODO: Create a function to write README file
fs.writeFile(fileName, readMeContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`README.md file generated successfully`);
  }
});

module.exports = generateMarkdown;
