const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: `input`,
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: `input`,
        name: "description",
        message: "Give a detailed description of your project.",
    },
    {
        type: `input`,
        name: "installation",
        message: "Give any installation instructions that users may need in order to use your project.",
    },
    {
        type: `input`,
        name: "usage",
        message: "Give any relevant usage information.",
    },
    {
        type: "list", 
        name: "license",
        message: "Choose from the following list of licenses under which your project operates.",
        choices: ["MIT", "Apache 2.0", "GPL", "BSD", "Other"],
    },
    {
        type: `input`,
        name: "contribution",
        message: "List any contribution guidlines that users should be aware of when attempting to develop your project.",
    },
    {
        type: `input`,
        name: "tests",
        message: "Give instructions on how users and devs can test your project.",
    },
    {
        type: `input`,
        name: "question",
        message: "Provide your Github username so users and devs can ask questions about your project.",
    },
    {
        type: `input`,
        name: "Email",
        message: "Provide your email address.",
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(`Successfully created ${fileName}`);
      }
    });
  }
  
  function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        console.log("User's answers:", data); 
        writeToFile("README.md", generateMarkdown(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  init();

