// The simplest way to describe a function is with a function type expression. 
// These types are syntactically similar to arrow functions:

//this one receive a function which receive a string
function greetFernanda(fn: (a:string) => void){
    fn("Hi, Fernanda")
}

// this one is the function which receive the string to print
function print(s : string){
    console.log(s)
}

greetFernanda(print)


// we can use a type alias to name a function type
type greetFunc = (a: string) => number

function greetFernandaAgain(fn: greetFunc){
    fn("Hi, Fernanda")
}

function print2(s: string){
    return s.length
}

greetFernandaAgain(print2)


//this is something callable with property (I don't understand)

type DescribableFunction = {
    description: string;
    (arg: number): boolean;
}

function doSomething(fn: DescribableFunction){ //so fn is a DescribableFunction

    console.log(fn.description + " returned" + fn(6))  //and this is the function
}

function myFucn(arg: number){
    return arg > 3;
}

myFucn.description = "default description" //so my function now has a new property


doSomething(myFucn) //I think I get it