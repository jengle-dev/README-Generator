// TODO: Include packages needed for this application
//node requirements/dependencies
const inquirer = require('inquirer');//getting an 'ERR_REQUIRE_ESM'
// import {inquirer} from 'inquirer';
const fs = require('fs');
const { title, features } = require('process');

const generateReadmeMd = ({ }) =>
    //README.md template
    ``;


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
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

    ])

    .then((answers) => {
        const readmeContent = generateReadmeMd(answers);

        // TODO: Create a function to write README file
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md.')
        );
    });

    // .catch((error) => {
    //     if (error.isTtyError) {
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     }

    // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//Sections of Readme provided from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
// Project title
// Description
// -motivation
// -why
// -what did you solve
// -what did you learn
// Table of Contents (if long)
// Installation
// Usage
// Screenshot
// Credits
// License
// Badges
// features
// How to Contribute
// Tests 