var password = () => {
    //declare an empty string
    var n = "";
    //create a string with alphabet
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-.";

    //loop over the string by the desired passwordLength
    for (i = 0; i <= 10; i++) {
        //each time loop runs, pick a random letter, and then add it to n
        n += str.charAt(Math.floor(Math.random() * str.length));
    }

    //return to the console the new string
    console.log('********************');
    console.log(`\n->> ${n.inverse} is your new password.\n`);
    console.log('********************');
}

module.exports = password;