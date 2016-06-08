// Given a string return the longest substring that contains unique letters for example
// longestUniqSubstring("baadabc") return "dabc"
function longestUniqSubstring(str) {
	var longestStr = currentStr = "";
	var start = end = 0;

	while(end !== str.length) {
		while(lastLetterWithinCurrentInterval(start, end, str)) {
			start++;
		}

		currentStr = str.slice(start, end + 1);

		if(currentStr.length > longestStr.length) {
			longestStr = currentStr;
		}

		end++;
	}

	return longestStr;
}

// if the last letter is within the interval [start, end) then return true
// meaning start inclusive and end exclusive
function lastLetterWithinCurrentInterval(start, end, str) {
	var lastLetter = str[end],
		indexOfLastLetter = str.indexOf(lastLetter, start);
	return indexOfLastLetter !== -1 && indexOfLastLetter < end;
}