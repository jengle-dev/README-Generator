// TODO: Include packages needed for this application
//node requirements/dependencies
const inquirer = require('inquirer');//getting an 'ERR_REQUIRE_ESM'
// import {inquirer} from 'inquirer';
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project or application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    //can you add a yes/no to branch off for additional questions on description or table of contents?
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use of your application or project.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'If any, what license(s) is required for this project?',
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address or contact info for this project?",
    },
    {
      type: "input",
      name: "status",
      message: "What status is your project or application in? Ex. 'In Progress', 'Complete' etc.",
    },
  ];

  generateMarkdown();
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
}
// Function call to initialize app
init();

// A majority of the sections of Readme provided from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
// Project title
// Description
// Installation
// Usage
// Credits
// License 