function allSubstring(str) {
	var len = str.length;
	for(var i = 0; i < len; i++) {
		for(var j = 1, jLen = len - i + 1; j < jLen; j++) {
			console.log(str.slice(i, i + j));
		}
	}
}