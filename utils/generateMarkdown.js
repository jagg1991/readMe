

//creating a funtion for the read me file

const generateMarkdown = (answer) =>
  `
## Table of Contents


    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [Licence](#Licence)
    [Contributors](#Contributors)
    [Test](#Test)
    [Repository Link](#Repository)
    [GitHub Info](#GitHub)



## Description of ${answer.Title}


${answer.Description}

## Installation instructions

${answer.Installation}

## Usage

${answer.Usage}


## Contrubutions!

${answer.Contributing}

## ${answer.Tests}

## Questions?

${answer.Questions}

- [${answer.Email}](${answer.Email})

- [${answer.GitHub}](${answer.GitHub}).

## License

${answer.license}




`


module.exports = generateMarkdown;
