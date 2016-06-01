function binarySearch(arr, target) {
	return binarySearchHelper(arr, 0, arr.length, target);
}

function binarySearchHelper(arr, start, end, target) { 
	if (start < end) {
		var mid = Math.floor((start + end)/2);
		var midValue = arr[mid];

		if (midValue > target) {
			return binarySearchHelper(arr, start, mid, target);     
		} else if (midValue < target) {
			return binarySearchHelper(arr, mid + 1, end, target);      
		} else {
			return mid;   
		}
	}
	return -start;  
}