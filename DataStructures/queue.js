function Queue(posArr) {
	// Private array which will hold the values of the queue
	this._data = [];
	if(typeof posArr !== "undefined" && posArr.constructor === Array) {
		var len = posArr.length;
		for(var i = 0; i < len; i++) {
			this.enqueue(posArr[i]);
		}
	}
}

// O(n)
Queue.prototype.enqueue = function(val) {
	this._data.push(val);
}

// O(n)
Queue.prototype.dequeue = function() {
	return this._data.shift();
}

// O(n)
Queue.prototype.peek = function() {
	return this._data[0];
}

Queue.prototype.print = function() {
	console.log(this._data);
}
