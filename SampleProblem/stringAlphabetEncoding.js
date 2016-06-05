/*
You are given a string "abc" which is encoded like "123" where alphabets are mapped 
like a => 1 to z => 26. Now find out how many string can be formed by reverse engineering 
encode string "123". 

For ex. given string "123" we can form 3 string "abc"(1,2,3), "lc" (i.e 12,3), "aw"(1,23). 

for string "1234" we have following possible combinations, I might be missing some of 
them but you get the idea 

{12, 3, 4} 
{1, 23, 4} 
{1, 2, 3, 4}
*/

// findEncodings("1234") would return ["ABCD", "AWD", "LCD"] and 3
function findEncodings(str) {
	var letters;
	var result = [],
		encodedResult = [];

	pairCombinations("", str, result);

	for(var i = 0, len = result.length; i < len; i++) {
		letters = strToLetters(result[i]);
		if(letters !== null){
			encodedResult.push(letters);
		}
	}

	console.log(encodedResult);
	console.log(encodedResult.length);
}

// Generates the combinations for example pairCombinations("", "1234", [])
// would return ["1,2,3,4", "1,2,34", "1,23,4", "12,3,4", "12,34"]
function pairCombinations(str, rem, result) {
	var prefix = str.length === 0 ? str: str + ",",
		remLen = rem.length;
	if(remLen === 0) {
		result.push(str);
	} else {
		pairCombinations(prefix + rem[0], rem.slice(1), result);
		if(remLen > 1) {
			pairCombinations(prefix + rem.slice(0, 2), rem.slice(2), result);
		}
	}
}

// Converts numbers to letter fors example "1,3" would return "AC"
function strToLetters(str) {
	var ascii;
	var strArr = str.split(","),
		maxAscii = "Z".charCodeAt(),
		retStr = "";

	for(var i = 0, len = strArr.length; i < len; i++) {
		ascii = parseInt(strArr[i]) + 64;
		// Make sure no invalid character is added
		if(ascii > maxAscii) {
			return null;
		}
		retStr += String.fromCharCode(ascii);
	}

	return retStr;
}