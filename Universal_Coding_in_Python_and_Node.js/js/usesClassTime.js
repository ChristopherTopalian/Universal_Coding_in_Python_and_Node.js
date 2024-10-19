// usesClassTime.js

const Time = require('./Time.js');

console.log(Time.getTime12());
console.log(Time.getTime24());

process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
7:15:47 PM
19:15:47
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

