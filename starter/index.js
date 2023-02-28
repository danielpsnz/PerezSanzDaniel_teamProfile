const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function managerInformation() {
    return inquirer.prompt([
      {
        type: "input",
        message: "what is your manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "number",
      },
    ])
  };

function typeEmployee() {
    inquirer.prompt([
     {
       type: "list",
       message: "What type of employee would you like to input",
       name: "name",
       choices: ["Engineer", "Intern"],
     },
   ]).then(val => {
      if (val.name === "Engineer") {
       engineerInformation()
     } else if (val.name === "Intern") {
       internInformation();
     };
   }); 
 };
