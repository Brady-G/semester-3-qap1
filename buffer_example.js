const { Buffer } = require("node:buffer");

// Create a buffer using a string encoded with utf-8
const data = Buffer.from("This is buffer data", "utf-8");

//Print the buffer seeing each individual character the string is made of.
console.log(data);

// Buffer allows for several data transformations such as we can go to base64 string
console.log(data.toString("base64"));
//You can also go to a hex string
console.log(data.toString("hex"));

///Buffer is like any other array it can be looped and can have its length retrieved.
console.log(data.length);