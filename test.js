function print() {
	var str;
	for(var i = 1; i <= 5; i++) {
		str = (i + " ").repeat(5);
		str = str.slice(0, str.length - 1);
		console.log(str);
	}
}
