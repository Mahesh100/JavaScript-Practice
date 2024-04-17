
var x = 7;

function getName(){
    console.log("Hello this is Name")
}

//invoke the function
console.log(x);
getName();

//---------------------------

//Hoisting in js

// console.log(y);
// getSurname();

console.log(getSurname);
var y = 8;
function getSurname(){
    console.log("My surname is :abcd")
}

//console.log(getSurname);