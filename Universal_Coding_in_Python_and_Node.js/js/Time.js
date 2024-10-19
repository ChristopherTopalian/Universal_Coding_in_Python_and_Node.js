// Time.js

const getTime12 = require('./getTime12.js');
const getTime24 = require('./getTime24.js');

// class that uses imported functions
class Time
{
    static getTime12()
    {
        return getTime12();
    }

    static getTime24()
    {
        return getTime24();
    }
}

module.exports = Time;

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

