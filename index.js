// TODO: Include packages needed for this application 
// I included inquirer@8.2.4 from npm
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "contents",
        message: "What is your table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you instal your App?"
    },
    {
        type: "input",
        name: "usage",
        message: "How to use the app?"
    },
    {
        type:"input",
        name: "contribution",
        message: "What is the contribution of your app?"
    },
    {
        type: "input",
        name: "Test",
        message: "How do you test your app?"
    }, 
    {
        type: "list",
        name: "license",
        message: "Which license do you want?",
        choices: [
            "Apache 2.0 License",
            "ISC",
            "MIT",
            "Mozilla",
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
        console.log("Title: " + answers.title);
        console.log("Description" + answers.description);
        console.log("Contents: " + answers.contents);
        console.log("Installation: " + answers.installation);
        console.log("Usage: " + answers.usage);
        console.log("Contribution: " + answers.contribution);
        console.log("Test: " + answers.test);
        console.log("License: " + answers.license);
        

            const template = generateMarkdown(answers)
            

            console.log(template)


            // create an MD file, put the template inside
            fs.writeFile("Result.md", template, function () {
                console.log("Readme has been generated!")
            })
          })

}

// Function call to initialize app
init();
