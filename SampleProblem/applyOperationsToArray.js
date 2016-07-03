/*Assume you have an array of length n initialized with all 0's and are given k update 
operations.
Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments 
each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) 
with inc.
Return the modified array after all k operations were executed.*/

function applyChanges(n, changes) {
	var temp;
	var retArr = [],
		len = changes.length,
		currSum = 0;

	for(var i = 0; i < n; i++) {
		retArr.push(0);
	}
	
	for(var i = 0; i < len; i++) {
		var [startInd, endInd, increment] = changes[i];
		retArr[startInd] += increment;
		if(endInd !== n - 1) {
			retArr[endInd + 1] -= increment;
		}
	}

	for(var i = 0; i < n; i++) {
		temp = retArr[i];
		retArr[i] += currSum;
		currSum += temp;
	}

	return retArr;
}

function bruteForceApplyChanges(n, changes) {
	var retArr = [],
		len = changes.length;

	for(var i = 0; i < n; i++) {
		retArr.push(0);
	}
	
	for(var i = 0; i < len; i++) {
		var [startInd, endInd, increment] = changes[i];
		while(startInd <= endInd) {
			retArr[startInd] += increment;
			startInd++;
		}
	}
	return retArr;
}

function unitTest() {
	function isEqual(arr1, arr2) {
		var len1 = arr1.length,
			len2 = arr2.length;
		if(len1 !== len2){ return false; }
		for(var i = 0; i < len1; i++) {
			if(arr1[i] !== arr2[i]) { return false; }
		}
		return true;
	}

	var n = 5,
		changes = [
		    [1,  3,  2],
		    [2,  4,  3],
		    [0,  2, -2]
		],
		expectedOutput = [-2, 0, 3, 5, 3],
		errorMessage = "This array is not correct";

	var result = applyChanges(n, changes);
	var bruteForceResult = bruteForceApplyChanges(n, changes);
	
	console.assert(isEqual(bruteForceResult, expectedOutput), errorMessage);
	console.log(bruteForceResult);
	console.assert(isEqual(result, expectedOutput), errorMessage);
	console.log(result);
}