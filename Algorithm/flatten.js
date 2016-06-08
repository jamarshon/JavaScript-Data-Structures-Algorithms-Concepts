// Flattens nested array to a single level array for example
// flatten([[1], [[2]], [[3], 4], 5, []]) returns [1, 2, 3, 4, 5]
function flatten(arr) {
	var result = [];
	flattenHelper(arr, result);
	return result;
}

function flattenHelper(elem, result) {
	if(elem instanceof Array) {
		var len = elem.length;
		for(var i = 0; i < len; i++) {
			flattenHelper(elem[i], result);
		}
	} else {
		result.push(elem);
	}
}