/*
This is because the equality operator == does type coercion, 
meaning that the interpreter implicitly tries to convert the values before comparing.

On the other hand, the identity operator === does not do type coercion, 
and thus does not convert the values when comparing.
*/

a == b
a === b
typeof a == typeof b && a == b