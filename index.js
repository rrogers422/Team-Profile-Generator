const fs = require('fs');
const inquirer = require('inquirer');

const questions = 
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Team Managers name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the Mangers ID?",
            name:"manID",
        },
        {
            type: "input",
            message:"What is the managers email address?",
            name: "manEmail",
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "phone",
        },
        {
            type: "checkbox",
            message: "What type of Team Memeber would you like?",
            name: "employee",
            choices: ["Engineer", "Intern", "Nomore Team Members."],
        },
    ])
    

    