var inquirer = require('inquirer');
var figlet = require('figlet');
require('colors');
var password = require('./modules/password');

//Title
figlet("Password Genr8r", (err, data) => {
    if (err) throw err;
    console.log(data.rainbow);
    //Menu Choices
    inquirer.prompt([{
        type: 'rawlist',
        name: 'choice',
        message: 'What do you want to do?',
        choices: [
            'Create a password',
            'Exit',
        ]
        //Answers
    }]).then(answers => {
        var choice = answers.choice;
        switch (choice) {
            case "Create a password":
                password();  //invoke imported function
                break;
            case "Exit":
                break;
        }
    })
});

