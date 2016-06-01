function sqrt(x) {
	var quotient;
	var currentGuess = x / 2,
		previousGuess = -Math.pow(10, 9),
		epsilon = 0.0000001;

	while(Math.abs(currentGuess - previousGuess) > epsilon) {
		previousGuess = currentGuess;
		quotient = x / currentGuess;
		currentGuess = (currentGuess + quotient) / 2
	}

	return currentGuess;
}