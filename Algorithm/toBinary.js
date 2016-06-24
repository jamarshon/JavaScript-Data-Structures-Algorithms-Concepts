function toBinary(num) {
	var result = 0,
		index = 0;
	
	while(num !== 0) {
		result += (num % 2) * Math.pow(10, index);
		num = Math.floor(num /2);
		index++;
	}

	return result;
}

function toBinary(num) {
	return num.toString(2);
}
