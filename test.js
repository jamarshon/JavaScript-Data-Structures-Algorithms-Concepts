function mergeSort(arr) {
	var len = arr.length;
	if(len > 1) {
		var middle = Math.floor(len / 2),
			left = arr.slice(0, middle),
			right = arr.slice(middle);
		return merge(mergeSort(left), mergeSort(right));
	} else {
		return arr;
	}
}

function merge(arr, a, b) {
	var aValue, bValue;
	var c = [],
		i = 0,
		j = 0,
		aLen = a.length,
		bLen = b.length;
	while(i < aLen && j < bLen) {
		aValue = a[i];
		bValue = b[j];
		if(aValue > bValue) {
			c.push(bValue);
			j++;
		} else {
			c.push(aValue);
			i++;
		}
	}

	while(i < aLen) {
		aValue = a[i];
		c.push(aValue);
		i++;
	}

	while(j < bLen) {
		bValue = b[j];
		c.push(bValue);
		j++;
	}

	return c;
}