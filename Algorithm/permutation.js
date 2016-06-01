function permutate(str) {
	var result = [];
	permutateHelper("", str, result);
	return result;
}

function permutateHelper(prefix, str, result) {
	var n = str.length;
	if(str.length === 0) {
		result.push(prefix);
	} else {
		for(var i = 0; i < n; i++) {
			permutateHelper(prefix + str[i], str.slice(0, i) + str.slice(i + 1), result);
		}
	}
}