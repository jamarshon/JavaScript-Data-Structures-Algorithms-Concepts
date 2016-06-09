// Recursive approach
function reverseString(s) {
	if(s === "") {
		return "";
	}
	return reverseString(s.slice(1)) + s[0];
}

// Iterative approach
function reverseStringIteratively(s) {
	var temp, i, lastInd;
	var s = s.split(""),
		len = s.length,
		middle = Math.floor(len / 2);

	for(i = 0; i < middle; i++) {
		lastInd = len - i - 1;
		temp = s[i];
		s[i] = s[lastInd];
		s[lastInd] = temp;
	}

	return s.join("");
}