// getTime12.js

function getTime12()
{
    // new date object for current date and time
    let now = new Date();

    // time as 12 hour format AM/PM
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm;

    // determine AM or PM
    if (hours >= 12)
    {
        ampm = 'PM';
    }
    else
    {
        ampm = 'AM';
    }

    // convert to 12 hour format
    hours = hours % 12;

    if (hours === 0)
    {
        // the hour 0 should be 12
        hours = 12;
    }

    // pad minutes with leading zeros if needed
    if (minutes < 10)
    {
        minutes = '0' + minutes;
    }

    // pad seconds with leading zeros if needed
    if (seconds < 10)
    {
        seconds = '0' + seconds;
    }

    // return formatted time
    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

if (require.main === module)
{
    console.log(getTime12());
}

module.exports = getTime12;

//----//

/*
4:15:30 PM
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

