// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        name: 'title',
        message: 'What is the title of your project?',
        response: 'string'
     }, {
        name: 'description',
        message: 'What is the description of your project?',
        response: 'string'
     }, {
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        response: 'string'
    }, {
        name: 'usage',
        message: 'What is the usage information for your project?',
        response: 'string'
    }, {
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
        response: 'string'
    }, {
        name: 'tests',
        message: 'What are the test instructions for your project?',
        response: 'string'
    }, {
        name: 'license',
        message: 'What license would you like to use?',
        type: 'list',
        choices: ['MIT', 'GNU', 'Apache', 'None']
    }, {
        name: 'username',
        message: 'What is your GitHub username?',
        response: 'string'
    }, {
        name: 'email',
        message: 'What is your email address?',
        response: 'string'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('READMETEST1.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();