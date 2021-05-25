var ps = require("prompt-sync");
var prompt=ps();
console.log("Enter \n1. TO FIND AREA OF TRIANGLE  \n2. TO FIND AREA OF RECTANGLE \n3. TO FIND AREA OF SQUARE \n4. TO FIND AREA OF CIRCLE")
var a = parseInt(prompt("Enter your choice: "));

switch(a)
{
    case 1:
        var h = parseInt(prompt("Enter height: "));
        var b = parseInt(prompt("Enter base: "));
        var area=(b*h)/2;
        console.log("Area: ",area);
        break;
    case 2:
        var l = parseInt(prompt("Enter length: "));
        var b = parseInt(prompt("Enter breadth: "));
        var area=l*b;
        console.log("Area: ",area);
        break;
    case 3:
        var l = parseInt(prompt("Enter length: "));
        var area=l*l;
        console.log("Area: ",area);
        break;
    case 4:
        var l = parseInt(prompt("Enter radius: "));
        var area=3.14*l*l;
        console.log("Area: ",area);
        break;
    default:
        console.log("WRONG CHOICE!!");
        


}


