const process = require("node:process");

// Lets check for unhandled exceptions in node as such we can hook into the event like this.
process.on("uncaughtException", (e) => {
    console.log("An unhandled exception happened! With message: ", e.message);
});

//Lets throw an error so the above code will print.
//Note: We put this in a timeout of 0 as to not stop the inital call stack just the one inside the arrow function of timeout.
setTimeout(() => {
    throw Error("This is an exception that was uncaught but we caught it with process.on uncaughtException!");
}, 0);

//Along with events on the process you can also get information from the process like such.
console.log(process.argv);

//You can also get things like the architeture the binary was created for with this,
console.log(process.arch);