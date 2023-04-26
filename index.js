// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Generates the questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write the description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Explain (if any) installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Include usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List collaborators (if any), third-party assets (if any), and/or tutorials followed (if any):',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Select a license:',
            name: 'license',
            choices: [
                'None',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Plubic LIcense v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ],
        },
        {
            type: 'input',
            message: 'Enter test instructions:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((responses) => {
        console.log(responses);
        // Combines the readme template with responses to the questions
        const newFile = template(responses);
        // Creates a new .md file wtih the template and responses
        fs.writeFile('Test.md', newFile, (err) =>
        err ? console.log(err) : console.log("Created README file."))
    })


// README Template using template literals
const template = (responses) =>
`# ${responses.title}

## Description
${responses.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## Credits
${responses.credits}

## License
${responses.license}

## Tests
${responses.test}

## Questions
For any additional questions, contact me at:
 - [Github](https://github.com/${responses.username})
 - [Email](${responses.email})
`;