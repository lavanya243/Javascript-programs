var ps = require("prompt-sync");
var prompt=ps();
var a = parseInt(prompt("Enter the first number: "));
var b = parseInt(prompt("Enter the second number: "));
console.log("Addition: ",a+b);
console.log("Subtraction: ",a-b);
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);
console.log("Remainder: ",a%b);
console.log("Exponentiation: ",a**b);


