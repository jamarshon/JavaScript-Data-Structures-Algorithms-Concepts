// O(n^2)
function insertionSort(arr) {
	var currValue, jValue;
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		currValue = arr[i];
		for(var j = i-1; j >= 0; j--) {
			jValue = arr[j];
			if(jValue < currValue) {
				break;
			}
			arr[j+1] = jValue;
		}
		arr[j+1] = currValue;
	}
	return arr;
}