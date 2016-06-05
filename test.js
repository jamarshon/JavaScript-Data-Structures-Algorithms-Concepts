function bubbleSort(arr) {
	var swapped, temp;
	var len = arr.length;
	do {
		swapped = false;
		for(var i = 0; i < len; i++) {
			if(arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				swapped = true;
			}
		}
	} while(swapped)
	
	return arr;
}