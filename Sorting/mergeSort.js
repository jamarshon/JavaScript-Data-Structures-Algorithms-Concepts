function mergeSort(arr) {
	var len = arr.length;

	if(len < 2) {
		return arr;
	} else {
		var middle = Math.floor(len / 2),
			left = arr.slice(0, middle),
			right = arr.slice(middle);
		return merge(mergeSort(left), mergeSort(right));
	}
}

function merge(a, b) {
	var c = [],
		i = 0,
		j = 0,
		aLen = a.length,
		bLen = b.length;

	var aValue, bValue;

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