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
        const role = answers.role;
        const newEmployee = new Intern(name, id, email, school, role);
        empArray.push(newEmployee);

        newEmp();
    });
    

}
const createHTML = () => {
    const genArray = [];
    const indexOne = 
      `<!DOCTYPE html>
       <html lang="en">
       <head>
          
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="/assets/style.css">
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="ie=edge">
           <title> ${empArray[0]}</title>
       </head>
       <body>
           <div class="card-container">`
      
           genArray.push(indexOne);
      for (i = 1; i < empArray.length; i++){
          let pushed = `<div class="card" style="width: 18rem;">
                   <div class="card-body">
                      <h1 class="teamName">Team Managers Name: ${empArray[0]}</h1>
                       <h2 class="card-title">${empArray[i].name}</h2>
                       <h3 class="card-subtitle mb-2 text-muted">Role: ${empArray[i].role}</h2>
                   </div>
                   <div class="card-bottom">
                       <p class="card-text"> ID: ${empArray[i].id} </p>
                       <p class="card-text"> Email: <a class="card-link" href="mailto: ${empArray[i].email}"> ${empArray[i].email}</a></p>
              
      `
      if (empArray[i].officePhone) {
          pushed += `
          <p> Contact: ${empArray[i].officePhone}</p>
          `
      }
      if (empArray[i].github) {
          pushed += `
          <p>GitHub: <a href="https://github.com/${empArray[i].github}">${empArray[i].github}</a></p>
          `
      }
      if (empArray[i].school) {
          pushed += `
          <p>School: ${empArray[i].school}</p>
          `
      }
      pushed += `
      </div>
      </div>
      `
      genArray.push(pushed)
  }
  
  const prodFin = `
  </div>
  </body>
  </html>
  `
  genArray.push(prodFin);
  
  fs.writeFile('index.html', genArray.join(""), function (err) {
      if (err) throw err
      else {
          console.log("Team Generated");
          console.log('Success');
      }
  })
  }
;
initialize();