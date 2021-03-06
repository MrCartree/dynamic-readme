const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
    },
    {
        type: "confirm",
        message: "Would you like to include a table of contents?",
        name: "tableContents"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How is your project installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is your project used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who are the contributors of this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What tests did you run? (if none please write 'Not Applicable')",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub"
    },
    {
        type: "list",
        message: "Please select a license",
        name: "license",
        choices: [
            "gpl",
            "mit",
            "moz"
        ]
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if(error) {
            console.log(error);
        } else {
            console.log("Success");
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(userResponse) {
        const markdownString = generateMarkdown(userResponse)
        writeToFile(`${userResponse.projectTitle}.md`, markdownString)
    });
}

// function call to initialize program
init();
