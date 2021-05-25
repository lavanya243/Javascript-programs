var ps = require("prompt-sync");
var prompt=ps();
var a = parseInt(prompt("Enter a number: "));
var b = parseInt(prompt("Enter a the number of multiples to be found: "));
var i;
for(i=1;i<=b;i++)
console.log(a," X ",i," = ",a*i);



