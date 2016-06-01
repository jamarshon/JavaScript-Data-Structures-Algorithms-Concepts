/*
After an event triggers on the deepest possible element, it then 
triggers on parents in nesting order. DOM elements can be nested inside 
each other. And somehow, the handler of the parent works even if 
you click on it’s child.

Find the same originating element using
*/
event.target

// To stop bubbling use 
event.stopPropagation()

/*
What's the effect of adding 'return false' to an click event listener?

The return value of an event handler determines whether or not the 
default browser behaviour should take place as well. In the case of 
clicking on links, this would be following the link, but the difference 
is most noticeable in form submit handlers, where you can cancel a form 
submission if the user has made a mistake entering the information.

The modern way of achieving this effect is to call 
*/

event.preventDefault()