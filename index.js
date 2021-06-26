// TODO: Include packages needed for this application
const fs = require("fs");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "projecttitle",
    default: "projectTitle",
  },
  {
    type: "input",
    message: "Please provide a description of your project",
    name: "description",
    default: "Project Description",
  },
  {
    type: "input",
    message: "Please provide installation instructions of your project",
    name: "installation",
    default: "Installation",
  },
  {
    type: "input",
    message: "Please provide usage information of your project",
    name: "usage",
    default: "Usage",
  },
  {
    type: "input",
    message: "Please provide contribution guidlines of your project",
    name: "contribution",
    default: "Contribution",
  },
  {
    type: "input",
    message: "Please provide test instructions of your project",
    name: "testintructions",
    default: "Test Instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to incorporate in your project?",
    choices: ["MIT", "GNU", "Boost", "ISC"],
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username",
    default: "GitHub: username",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((data) => {
    console.log(data);
    writeToFile("text.md", data);
  });
}

// Function call to initialize app
init();
