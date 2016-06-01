function levelOrder(root) {
	var frontNode;
	var queue = [root];
	while(queue.length !== 0) {
		frontNode = queue.shift();
		console.log(frontNode.value);
		queue.push(frontNode.left);
		queue.push(frontNode.right);
	}
}