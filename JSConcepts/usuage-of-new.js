function foo(){ this.f = 3; }
var d = new foo();
var e = foo(); 						// <--- e is undefined and now window.f = 3