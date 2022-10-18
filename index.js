// Include packages needed for this application
const inquirer = require('inquirer');

const start = () => {

    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select an option',
            name: 'select',
            choices: ['View all departments', 'View all roles', 'View all employees', 'add department', 'add role', 'add employee', 'update employee role']
        },
    ])


.then((answer) => {
    switch (answer.select) {
        case 'View all departments':
            console.log("View all departments!!")
        break;
        
        case 'View all roles':
            console.log("View all roles!!")
            break;

        case 'View all employees':
            console.log("View all employees!!")
            break;

        case 'add department':
            console.log("add department!!")
            break;

        case 'add role':
            console.log("add role!!")
            break;

        case 'add employee':
            console.log("add employee!!")
            break;

        case 'update employee role':
            console.log("update employee role!!")
            break;
    }
    
})

};

function init() {
    start()
}

init()