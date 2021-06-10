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

const prompt = () => {
   return inquirer.prompt([
    {
        type:"input",
        name: "projectTitle",
        message: "What is your project title?"
    },
    {
        type:"input",
        name: "description",
        message: "Tell us about your project"
    },
    {
        type:"list",
        name: "installation",
        message: "Please select installation",
        choices: ["#installation"]
    }

])   
} 
prompt().then(  answers => console.log(answers))