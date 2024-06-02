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
        response: 'list',
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
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();

// title of my project, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questionsgit