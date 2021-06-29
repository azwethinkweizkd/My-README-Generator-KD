# Markdown Generator Application [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

This application is using the command-line to generate a README.md file quickly and easily to assist with future development projects. This node.js application is using inquirer to ask a series of questions that will be used in assembling the markdown file. After the prompt questions are asked in the terminal and fs writeFileSync is used to create and populate the markdown with the responses to each question asked in the terminal.

## Table of Contents

- ### [Installation](#installation)
- ### [Usage](#usage)
- ### [Contribution](#contribution)
- ### [Test Instructions](#testInstructions)
- ### [License](#License)

## Installation

Installation of this application will require one to transfer all files (JS & json) to a working directory on their computer. As well as the ability to acces the computer terminal, either through GitBash or VSCode. This applcation can be found on this GitHub repository:

Once files have been save into a working directory a one more step will need to take place, and that is to install node_modules. The node_modules will include two important installation packages which are: inquirer & fs.

To install the node_modules properly one will need to type in the terminal under the current working directory for the application:

```bash
npm install
```

or for shorter notation:

```bash
npm i
```

Make sure that you are in the directory that these JS & json files have been saved to. Otherwise you will be intalling the node_modules to the wrong directory, and thus will not allow the appliation to work.

To use this application successfully, locate the current directory that the application is save in the terminal.

From there type:

```bash
node index
```

You will then be asked a series of questions pertaining to what information you would like to populate to your new _README.md_. If you would like to set up a basic _README.md_ without information, just hitting enter will populate it with default infomation. Near the end of the series of questions your will then be asked where you would like to save the newly creater markdown file. When in the save file question, hitting ESC will take you one directory back, SPACEBAR can be used to enter a directory, up and down arrows will move you through the selections, and hitting enter will save the markdown into the directory your current selection is on. Every README saved will always have a basic name of _README.md_

## Usage

Use this application to save time on your projects by generating a template with some information pertaining to your creation. The main function will be to setup a basic markdown that can be used later to fill in more detaled information, just like this markdown you are reading now! As well as provide an option to select a license and license badge, and populate the markdown with that ;icense information!

![Markdown Generator Application](assets/gif/markdownGenApp.gif)

## Contribution

Kevin Devlin - Main Contributor

GitHub Username:

[azwethinkweizkd](https://github.com/azwethinkweizkd)

## Test Instructions

No current test implemented with this application.

## License

This project was created using GNU GPL v3
