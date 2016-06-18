/* Given two nodes find the lowest common ancestor */
function lowestCommonAncestor(tree, n1, n2) {
	return lowestCommonAncestorHelper(tree.root, n1.value, n2.value);
}

function lowestCommonAncestorHelper(node, n1Val, n2Val) {
	var currValue = node.value;
	console.log(currValue + " " + n1Val + " " + n2Val);
	if(currValue > n1Val && currValue > n2Val) {
		return lowestCommonAncestorHelper(node.left, n1Val, n2Val);
	} else if(currValue < n1Val && currValue < n2Val) {
		return lowestCommonAncestorHelper(node.right, n1Val, n2Val);
	} else {
		return node;
	}
}