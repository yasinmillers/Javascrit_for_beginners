function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                



function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}


function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);
            
 var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}   

//Calling functions

Defining a function does execute it. Defining it names the function and specifies what to do when the function is called.

Calling the function performs the specified actions with the indicated parameters. For , if you define the function square, you could call it as follows:

square(5);
Copy to Clipboard
The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below in the code), as in this example:

console.log(square(5));
/* ... */
function square(n) { return n * n }
Copy to Clipboard
The scope of a function is the function in which it is declared (or the entire program, if it is declared at the top level).

Note: This works only when defining the function using the above syntax (i.e., function funcName(){}). The code below will not work.

This means that function hoisting only works with function declarations—not with function expressions.

console.log(square)    // square is hoisted with an initial value undefined.
console.log(square(5)) // Uncaught TypeError: square is not a function
const square = function(n) {
  return n * n;
}
Copy to Clipboard
The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function. The showProps() function (defined in Working with objects) is of a function that takes an object as an argument.

A function can call itself. For example, here is a function that computes factorials recursively:

function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
Copy to Clipboard
You could then compute the factorials of 1 through 5 as follows:

var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
Copy to Clipboard
There are other ways to call functions. There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.





            
            
            
