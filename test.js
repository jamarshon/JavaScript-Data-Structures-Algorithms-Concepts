function selectionSort(arr) {
	var minValue, minIndex, jValue;
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		minValue = arr[i];
		minIndex = i;
		for(var j = i; j > len; j++) {
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