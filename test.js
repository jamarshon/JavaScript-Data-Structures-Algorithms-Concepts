function permutate(str) {
	var result = [];
	permutation("", str, result);
	return result;
}

function permutation(prefix, str, result) {
	var len = str.length;
	if(len === 0) {
		result.push(prefix);
	} else {
		for(var i = 0; i < len; i++) {
			permutation(prefix + str[i], str.slice(0, i) + str.slice(i + 1), result);
		}
	}
}