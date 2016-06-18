function longestPalindrome(str) {
	var currPalindrome;
	var maxLenPalindrome = "";
	for(var i = 0, len = str.length; i < len; i++) {
		currPalindrome = longestPalindromeFromStartIndex(str, i);
		if(currPalindrome.length > maxLenPalindrome.length) {
			maxLenPalindrome = currPalindrome;
		}
	}
	return maxLenPalindrome;
}

// Given a start index, it will find the longest palindrome that starts with 
// that index. This is done by decreasing the length of the substring starting
// at the end of the string as this means the first palindrome found is the longest
// one for that particular start index.
function longestPalindromeFromStartIndex(str, startIndex) {
	var subString;
	var currIndex = str.length;
	while(currIndex > startIndex) {
		subString = str.slice(startIndex, currIndex);
		if(isPalindrome(subString)) {
			return subString;
		}
		currIndex--;
	}
	return "";
}

function isPalindrome(str) {
	return str.split("").reverse().join("") === str;
}