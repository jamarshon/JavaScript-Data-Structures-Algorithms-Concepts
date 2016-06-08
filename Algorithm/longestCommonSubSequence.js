// Returns the longest common subsequence of two strings for example
// longestCommonSubSequence("abcdaf", "acbcf") returns "abcf"
// Note subsequence does not mean substring so does not have to be consecutive
// only the order of the letters matter e.g. "fbca" is not valid above
function longestCommonSubSequence(s1, s2) {
	var retStr;
	var paths = [],
		matrix = [];

	fill(paths, s1, s2, 0);
	fill(matrix, s1, s2, 0);

	generatePathAndMatrix(paths, matrix, s1, s2);
	retStr = reconstructSubSequence(paths, s1, s2);
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

// In this case s1 is the rows and s2 is the columns
function generatePathAndMatrix(paths, matrix, s1, s2) {
	var s1LastChar, s2LastChar;
	var leftCell, topCell;
	var rowLen = s1.length + 1,
		colLen = s2.length + 1;

	for(var row = 1; row < rowLen; row++) {
		for(var col = 1; col < colLen; col++) {
			s1LastChar = s1[row - 1];
			s2LastChar = s2[col - 1];
			// If the last letter of both strings are equal then take 1 + the diagonal
			if(s1LastChar === s2LastChar) {
				matrix[row][col] = 1 + matrix[row - 1][col - 1];
				paths[row][col] = "diagonal";
			} else {
				// If the last letter is different then take the maximum of the left and
				// top cell
				leftCell = matrix[row][col - 1];
				topCell = matrix[row - 1][col];
				matrix[row][col] = Math.max(leftCell, topCell);
				paths[row][col] = matrix[row][col] === topCell ? "top" :"left";
			}
		}
	}
}

function reconstructSubSequence(paths, s1, s2) {
	var currPath;
	var currRow = s1.length,
		currCol = s2.length,
		result = [];

	while(currRow > 0 && currCol > 0) {
		currPath = paths[currRow][currCol];
		if(currPath === "diagonal") {
			result.unshift(s1[currRow - 1]);
			currRow--;
			currCol--;
		} else if(currPath === "left") {
			currCol--;
		} else if(currPath === "top") {
			currRow--;
		}
	}

	return result.join("");
}