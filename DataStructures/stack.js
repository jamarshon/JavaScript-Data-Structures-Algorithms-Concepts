function Stack(posArr) {
	// Private array which will hold the values of the stack
	this._data = [];
	if(typeof posArr !== "undefined" && posArr.constructor === Array) {
		var len = posArr.length;
		for(var i = 0; i < len; i++) {
			this.push(posArr[i]);
		}
	}
}

// O(n)
Stack.prototype.push = function(val) {
	this._data.push(val);
}

// O(n)
Stack.prototype.pop = function() {
	return this._data.pop();
}

// O(n)
Stack.prototype.peek = function() {
	return this._data[this._data.length - 1];
}

Stack.prototype.print = function() {
	console.log(this._data);
}
