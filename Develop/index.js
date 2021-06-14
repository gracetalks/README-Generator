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
        name: "lics",
        message: "Press Enter to Confirm License section to be added to README",
        choices: ["#license"]
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is Your Project Title?"
    },
    {
        type: "input",
        name: "about",
        message: "Tell Us About Your Project."
    },
    {
        type: "input",
        name: "github",
        message: "What is Your GitHub Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is Your Email Address? "
    },
    {
        type: "input",
        name: "emailinst",
        message: "Instructions on How to Reach Me with Additional Questions:",
    },
    {
        type: "input",
        name: "install",
        message: "Please Enter Your installation instructions.",
    },
    {
        type: "input",
        name: "usageinfo",
        message: "Please Enter Your Usage Information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please Enter Your Contribution Guidelines.",
    },
    {
        type: 'input',
        name: "testinst",
        message: "Please Enter Your Test Instructions.",
    },
    {
        type: "list",
        name: "license",
        message: "Please Select a License from the following:",
        choices: ["MIT", "TNT", "CNC", "None"] 
    }



]).then((res) =>  {
    console.log(res);

    const readMe = `

<img src="https://img.shields.io/static/v1.svg?label=License&message=${res.license}&color=red"/>

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


\r\n ## Installation
\r\n #### ${res.install}


\r\n ## Usage
\r\n #### ${res.usageinfo}


\r\n ## License
\r\n #### ${res.license}


\r\n ## Contributing
\r\n #### ${res.contribution}


\r\n ## Tests
\r\n #### ${res.testinst}


\r\n ## Questions
\r\n [GitHub Profile](https://github.com/${res.github})
\r\n ${res.email}
\r\n #### ${res.emailinst}



    
    `;

    fs.writeFile("README.md", readMe, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Readme generated" )
        }
    })
})

