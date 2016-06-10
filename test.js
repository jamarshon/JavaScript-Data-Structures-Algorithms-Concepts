function selectionSort(arr) {
	var minIndex, minValue, jValue, i, j;
	var len = arr.length;
	for(i = 0; i < len; i++) {
		minIndex = i;
		minValue = arr[i];
		for(j = i; j < len; j++) {
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