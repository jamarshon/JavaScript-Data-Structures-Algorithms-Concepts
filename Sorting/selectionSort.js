// O(n^2)
function selectionSort(arr) {
	var minIndex, minValue, jValue;
	for(var i = 0, len = arr.length; i < len; i++) {
		minValue = arr[i];
		minIndex = i;
		for(var j = i; j < len; j++) {
			jValue = arr[j];
			if(jValue < minValue) {
				minValue = jValue;
				minIndex = j;
			}
		}
		arr[minIndex] = arr[i];
		arr[i] = minValue;
	}
	return arr;
}