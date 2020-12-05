const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// array of questions for user
const questions = [
        {
          type: 'input',
          message: 'What is your project title?',
          name: 'title',
        },
        {
            type: 'list',
            message: 'Select the license',
            name: 'license',
            choices: ['MIT','GPLv3','GPL', 'Apache'],
        },
        {
            type: 'input',
            message: 'Enter project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter project installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide contribution information',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Provide tests information',
            name: 'tests',
        },
        {
          type: 'input',
          message: 'What is your Github username?',
          name: 'username',
        },
        {
          type: 'input',
          message: 'What is your email?',
          name: 'email',
        }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error){
        if (error) {
            throw error;
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Hello " + response.username);
        console.log(response);
        let readme = generateMarkdown(response);
        writeToFile("./README_GEN.md", readme);

})
};

// function call to initialize program
init();
