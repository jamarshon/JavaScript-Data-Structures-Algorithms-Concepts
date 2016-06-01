/*
Function Currying, also known as partial function application, 
is the use of a function (that accept one or more arguments) that returns a 
new function with some of the arguments already set. The function that 
is returned has access to the stored arguments and variables of the outer function. 
This sounds way more complex than it actually is, so let’s code.
*/

var add = function(a, b){
    return a + b;
};

var add2 = add.bind(this, 2);
add2(3); // 5