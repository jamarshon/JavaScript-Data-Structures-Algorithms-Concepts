/*
	Given N pair of parenthesis. Write an algorithm which would print 
	out all possible permutations possible with those parenthesis given 
	that parenthesis are in correct order (i.e. every open parenthesis is 
	matched with closed parenthesis)
*/

function printParenthesis(n) {
	var result = printParenthesisHelper(n);

	for(var i = 0, len = result.length; i < len; i++) {
		console.log(result[i]);
	}

	return result;
}

function printParenthesisHelper(n) {
	var enclosedResult, wrappedResult, prevResult;
	if(n === 1) {
		return [ "()" ];
	} else {
		prevResult = printParenthesisHelper(n - 1);
		enclosedResult = encloseParenthesis(prevResult);
		wrappedResult = wrapParenthesis(prevResult);
		return enclosedResult.concat(wrappedResult);
	}
}

function encloseParenthesis(result) {
	var enclosedElement;
	var retArr = [];

	for(var i = 0, len = result.length; i < len; i++) {
		enclosedElement = "(" + result[i] + ")";
		retArr.push(enclosedElement);
	}

	return retArr;
}

function wrapParenthesis(result) {
	var leftWrapElement, rightWrapElement, element;
	var retArr = [],
		hashMap = [];

	for(var i = 0, len = result.length; i < len; i++) {
		element = result[i];
		leftWrapElement = "()" + element;
		rightWrapElement = element + "()";
		addUniq(leftWrapElement, retArr, hashMap);
		addUniq(rightWrapElement, retArr, hashMap);
	}

	return retArr;
}

function addUniq(element, retArr, hashMap) {
	if(typeof hashMap[element] === "undefined") {
		retArr.push(element);
		hashMap[element] = true;
	}
}