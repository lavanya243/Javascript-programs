var ps = require("prompt-sync");
var prompt=ps();
var a = parseInt(prompt("Enter a number: "));
if(a%2==0)
console.log("EVEN NUMBER");
else
console.log("ODD NUMBER");


