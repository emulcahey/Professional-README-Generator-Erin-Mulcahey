// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// each question should have a name, message, and response, also added tips for each question
const questions = [{
        name: 'title',
        message: 'What is the title of your project? (Tip: Try to make the title descriptive and interesting.)',
        response: 'string'
     }, {
        name: 'description',
        message: 'What is the description of your project? (Tip: What was your motivation? Why did you build this project? What problem does it solve?)',
        response: 'string'
     }, {
        name: 'installation',
        message: 'What are the installation instructions for your project? (Tip: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.)',
        response: 'string'
    }, {
        name: 'usage',
        message: 'What is the usage information for your project? (Tip: Provide instructions and examples for use.)',
        response: 'string'
    }, {
        name: 'contributing',
        message: 'What are the contribution guidelines for your project? (Tip: If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.)',
        response: 'string'
    }, {
        name: 'tests',
        message: 'What are the test instructions for your project? (Tip: Write tests for your application. Then provide examples on how to run them.)',
        response: 'string'
    }, {
        name: 'license',
        message: 'What license would you like to use? (Tip: Choose a license for your application from the list below.',
        type: 'list',
        choices: ['MIT', 'GNU', 'Apache', 'None']
    }, {
        name: 'username',
        message: 'What is your GitHub username? (Tip: Please provide the username for your GitHub account.)',
        response: 'string'
    }, {
        name: 'email',
        message: 'What is your email address? (Tip: Please provide an email address where users can reach you with questions.)',
        response: 'string'
    }];

// TODO: Create a function to write README file
// the function will write the file to the 'utils' folder, and let the user know the name and location of the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log(`The file has been saved with the name ${fileName}, in the 'utils' folder!`);
    });
}

// TODO: Create a function to initialize app
// the function will prompt the user with the questions array, and then log the answers to the console
// then the function will call the writeToFile function with the file name 'ReadMe.md' and the generateMarkdown function with the answers
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('ReadMe.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();