// TODO: Include packages needed for this application
const fs = require("fs");
const { prompt, registerPrompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
registerPrompt("file-selector", require("inquirer-file-selector-prompt"));

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "projectTitle",
    default: "Project Title",
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
    default: "npm install",
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
    name: "testIntructions",
    default: "Test Instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to incorporate in your project?",
    choices: ["MIT", "GNU GPL v3", "Boost", "ISC", "None"],
  },
  {
    type: "input",
    message: "Please enter your GitHub username?",
    name: "userName",
    default: "GitHub Username",
  },
  {
    type: "file-selector",
    message: "Where would you like to save your Markdown file?",
    name: "filePath",
    selectionType: "folder",
  },
];

// TODO: Create a function to write README file
function writeToFile(filePath, fileName, data) {
  fs.writeFileSync(path.join(filePath, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile(
      inquirerResponses.filePath,
      "README.md",
      generateMarkdown({ ...inquirerResponses })
    );
  });
}

// Function call to initialize app
init();
