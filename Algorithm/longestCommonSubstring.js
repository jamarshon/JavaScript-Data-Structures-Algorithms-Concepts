/*Finds the longest common substring. For example 
longestCommonSubstring("abcdef", "zbcdf") should return bcd as that substring is the longest one
that appears in both of them */
function longestCommonSubstring(str1, str2) {
	var matrix = [];
	fill(matrix, str1, str2, 0);
	var retStr = populateAndFindLongestCommonSubstring(matrix, str1, str2);

	return retStr;
}

// Initialize the array with arrays of the passed in value
function fill(arr, s1, s2, value) {
	var firstRow = [],
		rowLen = s1.length + 1,
		colLen = s2.length + 1;

	for(var row = 0; row < rowLen; row++) {
		arr.push([value]);
	}

	for(var col = 0; col < colLen; col++) {
		firstRow.push(value);
	}

	arr[0] = firstRow;
	return arr;
}

// Populates the matrix with the correct values as well as returns the longest common substring
function populateAndFindLongestCommonSubstring(arr, s1, s2) {
	var diagonal, newCommonLen, retStr;
	var longestStrLen = -1,
		longestStrLenRow = -1,
		longestStrLenCol = -1,
		rowLen = s1.length + 1,
		colLen = s2.length + 1;

	for(var i = 1; i < rowLen; i++) {
		for(var j = 1; j < colLen; j++) {
			// If the letter of the column and the row are the same then
			// take 1 + the diagonal else just use zero
			if(s1[i - 1] === s2[j - 1]) {
				diagonal = arr[i - 1][j - 1];
				newCommonLen = 1 + diagonal;

				// Keeping track of the index and length of the longest common substring
				if(newCommonLen > longestStrLen) {
					longestStrLen = newCommonLen;
					[longestStrLenRow, longestStrLenCol] = [i, j];
				}

				arr[i].push(newCommonLen);
			} else {
				arr[i].push(0);
			}
		}
	}

	retStr = traverseDiagonal(arr, s1, longestStrLenRow, longestStrLenCol);
	return retStr;
}

// Given the two indices, keep going diagonal until zero is found while generating the 
// corresponding string. s1 and s2 would have the same letter so it doesn't require both
// strings as long i or row index is used on s1 and j or col index is used on s2
function traverseDiagonal(arr, s1, i, j) {
	var retStr = "";
	while(arr[i][j] !== 0) {
		retStr = s1[i - 1] + retStr;
		i--;
		j--;
	}
	return retStr;
}