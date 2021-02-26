// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require(`./utils/generateMarkdown`);

//Function for the user input
const userInput = () => {

    inquirer
        .prompt([

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
                message: "What should the user know about the usage of this project?"


            },
            {
                type: "input",
                name: "License",
                message: "Would you like to add the MIT license to your project? (yes/no)"


            },
            {
                type: "input",
                name: "Contributing",
                message: "Are there any contributors to this project?"


            },
            {
                type: "input",
                name: "Tests",
                message: "How does a user test you project?"


            },
            {
                type: "input",
                name: "Questions",
                message: "What would you like you questions section to say?"


            },
            {
                type: "input",
                name: "Email",
                message: "Please enter an email you would like to use for questions!"


            },
            {
                type: "input",
                name: "GitHub",
                message: "Please you GitHub username to add to the questions section of your readMe."


            },



        ])
        .then((answer) => {
            if (answer.license === 'yes') {
                answer.license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            } else {
                answer.license = '';
            }
            return answer;
        })

        .then((answer) => {
            const readMeContent = generateMarkdown(answer);
            fs.writeFile('README.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
            if (answer.License === 'yes') {
                ` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            }

        })
};
// calling userInput function to run
userInput();
