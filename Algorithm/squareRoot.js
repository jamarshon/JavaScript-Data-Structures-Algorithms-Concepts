// x(step) = x(step-1) - f(x(step-1))/f'(x(step-1))

function sqrt(x) {
    var quotient;

    var eps = 0.0001,
        currGuess = x / 2,
        previousGuess = -Math.pow(10,3);

    while( Math.abs(currGuess - previousGuess) > eps) {
        previousGuess = currGuess;
        quotient = x / currGuess;
        currGuess = (currGuess + quotient) / 2;
    }

    return currGuess;
}