const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { ENGINE_METHOD_DIGESTS } = require('constants');
const { Hash } = require('crypto');
//Empty to push data from Emlpoyee into
empArray = [];

//init to start app and Q&A
const initialize = () => {
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
            empArray.push(name);

            managerInfo();
        });
};

//manager callback function

const managerInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Team Managers name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the Mangers ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the managers email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "officePhone",
        },
    ])

        //consts for user answrs to be properly placed
        .then((answers) => {
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            const officePhone = answers.officePhone;
            const newEmployee = new Manager(name, id, email, officePhone);
            empArray.push(newEmployee);

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
                    createHTML();
                    break;
            }
        });
};

//Engineer

const newEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Engineers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Engineers employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Engineers email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Engineers GitHub username?',
            name: 'gitHub',
        },
    ])
    .then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const github = answers.gitHub;
        const newEmployee = new Engineer(name, id, email, github)
        empArray.push(newEmployee);

        newEmp();
    });
};
const newIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the interns employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the interns email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'school',
        },
    ])
    .then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const newEmployee = new Intern(name, id, email, school);
        empArray.push(newEmployee);

        newEmp();
    });
    
    function createHTML() {
        const starterHTML = `<!DOCTYPE html>
        <html lang ="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
            <title>Team Generator</title>
        </head>
        <body>

        </body>
        </html>`

        fs.writeFile("./dist/team-manager.html", html, function(err) {
            if(err) {
                console.log(err);
            }
        });
    }
    
    function addToHTML() {
    
    }

};
initialize();