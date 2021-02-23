// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: "input",
            name: "Table of contents",
            message: "List a table of contents for your readMe."


        },
        {
            type: "input",
            name: "Title",
            message: "What would you like the title of your readME to be?"


        },
        {
            type: "input",
            name: "Description",
            message: "Please list a description of how your application works?"


        },

        {
            type: "input",
            name: "Installation",
            message: "Explain how to install your application."


        },
        {
            type: "input",
            name: "Usage",
            message: "What would you like the title of your readME to be?"


        },
        {
            type: "input",
            name: "License",
            message: "What would you like the title of your readME to be?"


        },
        {
            type: "input",
            name: "Contributing",
            message: "What would you like the title of your readME to be?"


        },
        {
            type: "input",
            name: "Tests",
            message: "What would you like the title of your readME to be?"


        },
        {
            type: "input",
            name: "Questions",
            message: "What would you like the title of your readME to be?"


        }


    ])

//     .then((answer)) => {
//     console.log(answer)
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

const readME = (answer) =>
    `
## Table of Contents

${answer.tableofcontents}





## Description of ${answer.Title}


${answer.Description}

## Installation instructions

${answer.Installation}

## ${answer.Usage}

## Linensing

${answer.License}

## Contrubutions!

${answer.Contributing}

## ${answer.Tests}

## Questions, or concerns??

${answer.Questions}




`

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
