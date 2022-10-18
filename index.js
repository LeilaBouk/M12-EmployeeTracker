// Include packages needed for this application
const inquirer = require('inquirer');

const select = () => {

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


const addDept = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new department name',
            name: 'depName',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
    ])
};

const addRole = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new role name',
            name: 'roleName',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter salary of this role',
            name: 'roleSalary',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'select',
            message: 'Please select a department to add this role to',
            name: 'depName',
            choices: ['departments', 'departments2']
        },
    ])
};

const addEmp = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employees first name',
            name: 'empFN',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter employees last name',
            name: 'empLN',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'select',
            message: 'Select employees role',
            name: 'empRole',
            choices: ['role', 'role2']
        },
        {
            type: 'input',
            message: 'Enter employees manager',
            name: 'empMang',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
    ])
};


function init() {
    select()
}

init()