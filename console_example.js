const console = require("node:console");

//We all know the classic log function
console.log("This is logged to the console.");

//But console also contains other functions for different severities like such
console.warn("Warning message");
console.error("Error message");
console.debug("Debug message");

//The console object contains a helper for logging on asseration so with that you can do this
let value = false;
console.assert(value, "This will log");
value = true;
console.assert(value, "But this will not!");

//Console also has other helpers like the table function for printing multidimensional arrays
const table = [
    ["Value 0", 0, true, "Another string 0"],
    ["Value 1", 1, false, "Another string 1"],
    ["Value 2", 2, true, "Another string 2"],
    ["Value 3", 3, false, "Another string 3"],
    ["Value 4", 4, true, "Another string 4"],
]
console.table(table);