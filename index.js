const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { ENGINE_METHOD_DIGESTS } = require('constants');
const { Hash } = require('crypto');
//Empty to push data from Emlpoyee into
employeeArray = [];

//init to start app and Q&A
const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                messgae: 'please enter the team name or company',
                name: 'name',

            },
        ])
        .then((answers) => {
            const name = answers.name;
            employeeArray.push(name);

            managerInfo();
        });
};

//manager callback function

const managerInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Team Managers name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the Mangers ID?",
            name: "manID",
        },
        {
            type: "input",
            message: "What is the managers email address?",
            name: "manEmail",
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "officePhone",
        },
    ])

        //consts for user answrs to be properly placed
        .then((answers) => {
            const name = answers.managerName;
            const id = answers.manID;
            const email = answers.manEmail;
            const officePhone = answers.officePhone;
            const newEmployee = new Manager(name, id, email, phone);
            employeeArray.push(newEmployee);

            newEmp();
        });

const newEmp = () => {
    //new employee function
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add more employees?',
                choices: ['Engineer', 'Intern', 'No'],
                name: 'newEmpData',
            },

        ])
        .then((answers) => {
            switch (answers.newEmpData) {
                case "Engineer":
                    newEngineer();
                    break;
                case "Intern":
                    newIntern();
                    break;
                case "No":
                    generateIT();
                    break;
            }
        });
};

//Engineer

const newEngineer
