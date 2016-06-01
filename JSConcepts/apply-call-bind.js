/*
Call/apply call the function immediately, whereas bind returns a function 
They all attach this into function (or object) and function parameters
*/
function foo(){}

foo.call(this, param1, param2, param3);

// Bind attaches this into function and it needs to be invoked separately like this:

var fooFunc = foo.bind(this);
fooFunc(param1, param2, param3); 

var fooFunc2 = foo.bind(this, param1, param2, param3);
fooFunc2();

/*
	Apply is similar to call except that it takes an array-like object 
	instead of listing the arguments out one at a time:
*/

foo.apply(this, [param1, param2, param3]);