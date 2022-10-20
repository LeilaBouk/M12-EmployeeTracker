// Include packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const dotenv = require("dotenv");

dotenv.config();

var db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

db.connect(function(err){
    if(err){
        throw err;
    } else {
        start()
    }
})

const select = () => {

    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select an option',
            name: 'select',
            choices: ['View all departments', 'View all roles', 'View all employees', 'add department', 'add role', 'add employee', 'update employee role', 'Done']
        },
    ])


.then((answer) => {
    switch (answer.select) {
        case 'View all departments':
            console.log("View all departments!!")
            viewDepts();
            break;
        
        case 'View all roles':
            console.log("View all roles!!")
            viewRoles();
            break;

        case 'View all employees':
            console.log("View all employees!!")
            viewEmps();
            break;

        case 'add department':
            console.log("add department!!")
            addDept()
            break;

        case 'add role':
            console.log("add role!!")
            addRole();
            break;

        case 'add employee':
            console.log("add employee!!")
            addEmp();
            break;

        case 'update employee role':
            console.log("update employee role!!")
            updateEmp();
            break;

         case 'Done':
            console.log("Exiting...")
            break;
    }
    
})

};

const viewDepts = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        select();
    })
}

const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        select();
    })
}

const viewEmps = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        select();
    })
}


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


function start() {
    select()
}

