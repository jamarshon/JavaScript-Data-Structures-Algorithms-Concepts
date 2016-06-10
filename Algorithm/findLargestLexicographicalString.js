/*
	Given a string "str" and pair of "N" swapping indices, 
	generate a lexicographically largest string. Swapping indices 
	can be reused any number times. 

	Eg 
	String = "abdc" 
	Indices: 
	(0, 3) 
	(2, 3) 

	Answer: 
	Some variations from swapping are "cbda", "abcd" ...
	but the final answer should be "dbca" as it is lexicographically largest. */

/*
	The idea is to merge the swapping indices if they intersect first and 
	treat them as a single group. The sort that group lexicographically
	and place those letters where they should have been. For example,
	[[0, 3], [2, 3]] is merged into [[0, 2, 3], []] as they intersect at 3
	Then sort "abdc" at the indexes of 0, 2 and 3 to get "dca" then place them 
	back where they were n the string so "dbca"
	Therefore the output of 
	findLargestLexicographicalString("abdc", [[0, 3], [2, 3]]) would be "dbca */
function findLargestLexicographicalString(str, arr) {
	var mergedArr = merge(arr),
		len = mergedArr.length;
	for(var i = 0; i < len; i++) {
		str = swap(str, mergedArr[i]);
	}
	return str;
}

/*
	Given an array of indices and a string swap those characters at those indices
	so that the largest letter is closer to the front for example
	swap("bazs", [1,2,2,3]) would return "bzsa" 
	as "a" was at index 1, "z" at index 2 and "s" at index 3 meaning sort "azs"
	to become "zsa" and then insert them back into the indices of 1,2, and 3 */
function swap(str, arr) {
	var index;
	var len = arr.length,
		indicesChosen = [],
		indices = [],
		lettersToSwap = [],
		strArr = str.split("");

	if(len === 0) {
		return str;
	}

	for(var i = 0; i < len; i++) {
		index = arr[i];
		if(typeof indicesChosen[index] === "undefined") {
			lettersToSwap.push(strArr[index]);
			indices.push(index);
			indicesChosen[index] = true;
		}
	}

	lettersToSwap.sort(function(a, b) {
		return b > a;
	});

	indices.sort();

	for(var i = 0, indLen = indices.length; i < indLen; i++) {
		index = indices[i];
		strArr[index] = lettersToSwap[i];
	}

	return strArr.join("");
}

/*
	Returns the pairs as merged if they intersect for example 
	merge([[1,2], [4,5], [6,7], [2,6]]) returns [[1, 2, 2, 6, 6, 7], [4, 5], [], []]
	Arr length does not change so an 4 length array would return a 4 length array.
	Values of element of the array are not unique and can be empty */
function merge(arr) {
	var otherInterval, increased, prevLen, currLen;
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		do {
			increased = false;
			prevLen = arr[i].length;
			for(var j = 0; j < len; j++) {
				if(i !== j) {
					arr[i] = combine(arr[i], arr[j]);
					currLen = arr[i].length;
					if(prevLen !== currLen) {
						arr[j] = [];
						increased = true;
					}
				}
			}
		} while(increased)
	}

	return arr;
}

// If there is an intersection, combine the arrays a and b else return a
function combine(a, b) {
	var hashTable = [],
		retArr = [],
		hasIntersection = false;

	for(var i = 0, len = a.length; i < len; i++) {
		hashTable[a[i]] = true;
	}

	for(var i = 0, len = b.length; i < len; i++) {
		if(typeof hashTable[b[i]] !== "undefined") {
			hasIntersection = true;
			break;
		}
	}

	if(hasIntersection) {
		return a.concat(b);
	} else {
		return a;
	}
}