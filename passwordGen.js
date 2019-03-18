var password = require('./modules/password');
var inquirer = require('inquirer');
var figlet = require('figlet');
require('colors');

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
                password();
                break;
            case "Exit":
                break;
        }
    })
});

