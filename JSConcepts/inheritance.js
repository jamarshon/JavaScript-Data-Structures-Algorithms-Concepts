child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

/*
	The object used in Object.create actually forms the prototype 
	of the new object, where as in the new Function() form the declared 
	properties/functions do not form the prototype.

	Yes, Object.create builds an object that inherits directly from the 
	one passed as its first argument. With constructor functions, the newly 
	created object inherits from the constructor's prototype, 

	e.g.: 
*/
	var o = new SomeConstructor(); 
/*
	In the above example, o inherits directly from SomeConstructor.prototype. 
	There's a difference here, with Object.create you can create an object 
	that doesn't inherit from anything, Object.create(null);, on the other hand, 
	if you set SomeConstructor.prototype = null; the newly created object will 
	inherit from Object.prototype.  
*/

/*
	Very simply said, new X is Object.create(X.prototype) with 
	additionally running the constructor function. (And giving the 
	constructor the chance to return the actual object that should be 
	the result of the expression instead of this.) That’s it. :)
*/

var pseudoNew = function (constructor, args) {
  var newObject = Object.create(constructor.prototype);
  var returnedObject = constructor.apply(newObject, args);
  if(typeof returnedObject === 'undefined') {
    return newObject;
  } else {
  	return returnedObject;
  }
};
