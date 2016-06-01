function sort(s) {
	if(!s.isEmpty()) {
		var x = s.pop();
		sort(s);
		insert(s, x);
	}
}

function insert(s, x) {
	if(!s.isEmpty()) {
		var y = s.peek();
		if(x < y) {
			s.pop();
			insert(s, x);
			s.push(y);
		} else {
			s.push(x);
		}
	} else {
		s.push(x);
	}
}