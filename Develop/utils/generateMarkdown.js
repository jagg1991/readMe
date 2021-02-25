// TODO: Create a function that returns a license badge based on which license is passed in



const generateMarkdown = (answer) =>
  `
## Table of Contents


      - [Description](#Description)
      - [Installation](#Installation)
      - [Usage](#Usage)
      - [Licence](#Licence)
      - [Contributors](#Contributors)
      - [Test](#Test)
      - [Repository Link](#Repository)
      - [GitHub Info](#GitHub)



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

## Questions?

${answer.Questions}

If you have any questions or concerns, you can email me at [${answer.Email}](${answer.Email})

You can also add my GitHub respitory [${answer.GitHub}](${answer.GitHub}).




`


module.exports = generateMarkdown;
