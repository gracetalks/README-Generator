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
        type: "list",
        name: "TOC",
        message: "Please confirm table of contents to be added to README",
        choices: ["#table of contents"]
    },
    {
        type: "list",
        name: "description",
        message: "Please confirm description to be added to README",
        choices: ["#description"]
    },
    {
        type: "list",
        name: "installation",
        message: "Please confirm installation to add to README",
        choices: ["#installation"]
    },
    {
        type: "list",
        name: "usage",
        message: "Please confirm usage to add to README",
        choices: ["#usage"]
    },
    {
        type: "list",
        name: "contributing",
        message: "Please confirm contributing to add to README",
        choices: ["#contributing"]
    },
    {
        type: "list",
        name: "tests",
        message: "Please confirm tests to add to README",
        choices: ["#tests"]
    },
    {
        type: "list",
        name: "questions",
        message: "Please confirm questions to be added to README",
        choices: ["#questions"]
    },
    {
        type: "list",
        name: "license",
        message: "Please confirm license to add to README",
        choices: ["#license"]
    },
    {
        type: "list",
        name: "questions",
        message: "Please select questions",
        choices: ["#questions"]
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
\r\n ## Description
\r\n #### ${res.about}
\r\n
\r\n ## Table of Contents
\r\n * [Description](${res.description})
\r\n * [Installation](${res.installation})
\r\n * [Questions](${res.questions})

\r\n ## Questions
\r\n [GitHUb Profile](https://github.com/${res.github})
\r\n ${res.email}

<img src="https://img.shields.io/static/v1.svg?label=License&message=${res.license}&color=red"/>
    
    `;

    fs.writeFile("README.md", readMe, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Readme generated" )
        }
    })
})

