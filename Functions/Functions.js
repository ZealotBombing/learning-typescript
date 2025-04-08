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
