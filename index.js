const Manager = require("./starter/lib/Manager");
const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

function buildTeam() {
  if(!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(employees), 'utf-8')
}

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
    ]).then(answers => {
      const manager = new Manager (answers.name, answers.id, answers.email, answers.number)
      employees.push(manager)
      console.log(manager)
      createTeam()
    })
}

function engineerInformation() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your engineer's GitHub usernam?",
      name: "GitHub",
    },
  ]).then(answers => {
    const engineer = new Engineer(answer.name, answer.id, answer.email, answer.GitHub)
    employees.push(engineer);
    createTeam()
  })
}

function internInformation() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your intern's school?",
      name: "school",
    },
  ]).then(function(answer) {
    let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
    employees.push(intern)
    console.log(intern)
    createTeam()
  })
}

function createTeam() {
    return inquirer.prompt([
     {
       type: "list",
       message: "What type of employee would you like to input?",
       name: "name",
       choices: ["Engineer", "Intern", "Not applicable"],
     },
   ]).then(val => {
      if (val.name === "Engineer") {
       engineerInformation();
     } else if (val.name === "Intern") {
       internInformation();  
     } else if (val.name === "Manager") {
      managerInformation();
     } else {
      buildTeam()
     }
   })
}