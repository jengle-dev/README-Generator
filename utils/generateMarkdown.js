const fs = require('fs');
const inquirer = require('inquirer'); //getting an 'ERR_REQUIRE_ESM' reverted from 8.2.4 to 7.3.3 to allow for commonJS

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return ('');
  } else {
    return license;
  }
};


// Function to generate markdown text itself for README
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
    return readMeContent.trim(); //converts to a string to help with the formatting and output
};

// Function to write README file
function writeToFile(fileName, readMeContent) {
  readMeContent = generateMarkdown('data');
fs.writeFile(fileName, readMeContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Your new README.md file generated successfully`);
  }
});
};

module.exports = writeToFile;