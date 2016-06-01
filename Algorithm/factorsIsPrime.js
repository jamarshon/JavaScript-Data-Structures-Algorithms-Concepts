function factors(n) {
	var retArr = [],
		sqrtN = Math.sqrt(n);

	for(var i = 1; i <= sqrtN; i++) {
		if(n % i === 0) {
			retArr.push(i);
			retArr.push(n/i);
		}
	}

	return retArr;
}

function isPrime(n) {
	var f = factors(n);
	return f.length === 2;
}