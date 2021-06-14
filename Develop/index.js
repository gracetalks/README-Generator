// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
   
    {
        type: "list",
        name: "TOC",
        message: "Press Enter to Confirm Table of Contents section to be added to README",
        choices: ["#table of contents"]
    },
    {
        type: "list",
        name: "description",
        message: "Press Enter to Confirm Description section to be added to README",
        choices: ["#description"]
    },
    {
        type: "list",
        name: "installation",
        message: "Press Enter to Confirm Installation section to be added to README",
        choices: ["#installation"]
    },
    {
        type: "list",
        name: "usage",
        message: "Press Enter to Confirm Usage section to be added to README",
        choices: ["#usage"]
    },
    {
        type: "list",
        name: "contributing",
        message: "Press Enter to Confirm Contributing section to be added to README",
        choices: ["#contributing"]
    },
    {
        type: "list",
        name: "tests",
        message: "Press Enter to Confirm Tests section to be added to README",
        choices: ["#tests"]
    },
    {
        type: "list",
        name: "questions",
        message: "Press Enter to Confirm Questions section to be added to README",
        choices: ["#questions"]
    },
    {
        type: "list",
        name: "license",
        message: "Press Enter to Confirm License section to be added to README",
        choices: ["#license"]
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "about",
        message: "Tell us about your project"
    },
    {
        type: "input",
        name: "github",
        message: "What's your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Your Email Address "
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: ["MIT", "TNT", "CNC", "None"] 
    }



]).then((res) =>  {
    console.log(res);

    const readMe = `
# ${res.projectTitle}
\r\n ## Table of Contents
\r\n * [Description](${res.description})
\r\n * [Installation](${res.installation})
\r\n * [Usage](${res.usage})
\r\n * [License](${res.lics})
\r\n * [Contributing](${res.contributing})
\r\n * [Tests](${res.tests})
\r\n * [Questions](${res.questions})


\r\n ## Description
\r\n #### ${res.about}
\r\n

## Installation

## Usage

## License

## Contributing

## Tests

\r\n ## Questions
\r\n [GitHub Profile](https://github.com/${res.github})
\r\n ${res.email}

<img src="https://img.shields.io/static/v1.svg?label=License&message=${res.license}&color=red"/>

\r\n ##
    
    `;

    fs.writeFile("README.md", readMe, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Readme generated" )
        }
    })
})

