function bubbleSort(arr) {
	var swapped, temp;
	var len = arr.length;
	do {
		swapped = false;
		for(var i = 0; i < len - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while(swapped)

	return arr;
}