function reverse(node) {
	var next;
	var prev = null,
		curr = node;

	while(curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}