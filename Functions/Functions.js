// The simplest way to describe a function is with a function type expression. 
// These types are syntactically similar to arrow functions:
//this one receive a function which receive a string
function greetFernanda(fn) {
    fn("Hi, Fernanda");
}
// this one is the function which receive the string to print
function print(s) {
    console.log(s);
}
greetFernanda(print);
function greetFernandaAgain(fn) {
    fn("Hi, Fernanda");
}
function print2(s) {
    return s.length;
}
greetFernandaAgain(print2);
function doSomething(fn) {
    console.log(fn.description + " returned" + fn(6)); //and this is the function
}
function myFucn(arg) {
    return arg > 3;
}
myFucn.description = "default description"; //so my function now has a new property
doSomething(myFucn); //I think I get it
