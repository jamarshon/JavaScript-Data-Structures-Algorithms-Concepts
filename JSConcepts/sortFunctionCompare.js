/*
	arr.sort([compareFunction]) mutates the original array

	If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.

	If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted 
	with respect to all different elements. 

	If compareFunction(a, b) is greater than 0, sort b to a lower index than a.

	compare(a, b) < 0 => [a, b]
	compare(a, b) === 0 => original array is [*, a, b, *] then [*, a, b, *]
							original array is [*, b, a, *] then [*, b, a, *]
	compare(a, b) > 0 => [b, a]

	defaut is arr.sort(function(a, b){ return a - b; })
	which sorts in ascending order eg [1,2,3]
*/

var arrOfObj = [
	{name: "Mike", title: "Android Developer", salary: 200},
	{name: "Bob", title: "Web Developer", salary: 100},
	{name: "May", title: "Android Developer", salary: 75},
	{name: "Steve", title: "Web Developer", salary: 250},
	{name: "Bill", title: "Android Developer", salary: 150}
];

// Sort by title descending but if same title title, sort the one with higher salary first
arrOfObj.sort(function(a, b) {
	if(a.title === b.title) {
		return b.salary - a.salary;
	} else {
		return b.title > a.title;
	}
});

/* The return would be 
[	
	{name: "Steve", title: "Web Developer", salary: 250},
	{name: "Bob", title: "Web Developer", salary: 100},
	{name: "Mike", title: "Android Developer", salary: 200},
	{name: "Bill", title: "Android Developer", salary: 150},
	{name: "May", title: "Android Developer", salary: 75}
]

*/