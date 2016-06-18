function roundToNearest(num, interval) {
	return Math.round(num / interval) * interval;
}

function roundDown(num, interval) {
	return Math.floor(num / interval) * interval;
}

function roundUp(num, interval) {
	return Math.ceil(num / interval) * interval;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}