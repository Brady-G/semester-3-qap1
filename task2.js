const moment = require("moment");

//Moment allows a multitude of things with dates and times as such you can do this to print out the current date.
console.log(moment().format("YYYY-MM-DD"));

//With moment you can also format it any way you can so if I want it like such I can.
console.log(moment().format("MM-YYYY/DD + h-mm"));

//Moment also allows for relative formatting so you can do it like such.
console.log(moment("20030721", "YYYYMMDD").fromNow());

//You can also add or subtract time or get to a specific point in a day with moment
//so we can get teh time from now to the end of the day with this
console.log(moment().endOf("day").fromNow());