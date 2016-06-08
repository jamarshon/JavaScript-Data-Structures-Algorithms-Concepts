function quickSort(arr) {
	return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, left, right) {
	if(arr.length > 1) {
		var updatedLeft = partition(arr, left, right);
		if(left < updatedLeft - 1) {
			quickSortHelper(arr, left, updatedLeft - 1);
		}
		if(updatedLeft < right) {
			quickSortHelper(arr, updatedLeft, right);
		}
	}

	return arr;
}

function partition(arr, left, right) {
	var pivotInd = Math.floor((left + right) / 2),
		pivot = arr[pivotInd];
	while(left <= right) {
		while(arr[left] < pivot) {
			left++;
		}
		while(arr[right] > pivot) {
			right--;
		}
		if(left <= right) {
			swap(arr, left, right);
			left++;
			right--;
		}
	}
	return left;
}

function swap(arr, left, right) {
	var temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
}