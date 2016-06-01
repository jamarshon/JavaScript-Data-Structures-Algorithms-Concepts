// The class for the node which has default properties of being a leaf
function Node(value) {
	this.value = value;
	this.height = 0;
	this.parent = null;
	this.left = null;
	this.right = null;
}

// Helper function to get the height when there is no node present
function height(node) {
	return (node === null) ? -1 : node.height;
};

// The class for the AVL tree which has an optional parameter of elements
// to create a tree out of
function AVLTree(option) {
	this.root = null;
	// Insert all the elements into the tree
	this.insert(option);
}

// Inserts any number of elements into the tree and then print the result
AVLTree.prototype.insert = function(option) {
	var optionType = typeof option;
	if(option instanceof Array) {
		for(var i = 0, len = option.length; i < len; i++) {
			this._insertHelper(option[i]);
		}
	// Currently only supports string and number due to magnitude operators
	} else if(optionType === "string" || optionType === "number") {
		this._insertHelper(option);
	} else {
		throw "Invalid type to insert!";
	}
	
	this.print();
};

// The method for inserting a new value into the tree
AVLTree.prototype._insertHelper = function(newValue) {
	var parentNode = null,
		newNode = new Node(newValue),
		currentNode = this.root;

	// Finding the correct place to insert the new node
	while(currentNode !== null) {
		parentNode = currentNode;
		if(currentNode.value >= newValue) {
			currentNode = currentNode.left;
		} else {
			currentNode = currentNode.right;
		}
	}

	// Check if the tree is empty (if it is, then parentNode will still be null)
	if(this.root === null) {
		this.root = newNode;
	} else if(parentNode.value >= newValue) {
		// The parent node is greater than the new node so insert in left tree
		parentNode.left = newNode;
	} else {
		// The parent node is less than the new node so insert in left tree
		parentNode.right = newNode;
	}

	newNode.parent = parentNode;
	this._rebalance(newNode);
};

// Rebalances tree by traversing from the inserted node all the way up to the root
// and rotating based on height
AVLTree.prototype._rebalance = function(root) {
	var node = root;

	while(node !== null) {

		this._updateHeight(node);

		// left heavy
		if(height(node.left) >= height(node.right) + 2) {
			// if left left child -> rotate right
			// else left right child -> rotate left then rotate right
			if(height(node.left.left) >= height(node.left.right)) {
				this._rotateRight(node);
			} else {
				this._rotateLeft(node.left);
				this._rotateRight(node);
			}

		// right heavy
		} else if(height(node.right) >= height(node.left) + 2) {
			// if right right child -> rotate left
			// else right left child -> rotate right then rotate left
			if(height(node.right.right) >= height(node.right.left)) {
				this._rotateLeft(node);
			} else {
				this._rotateRight(node.right);
				this._rotateLeft(node);
			}
		}

		node = node.parent;
	}
};


// Update the heights by taking the max height of the left and right branches
AVLTree.prototype._updateHeight = function(node) {
	var leftHeight = height(node.left),
		rightHeight = height(node.right);

	node.height = Math.max(leftHeight, rightHeight) + 1;
};

AVLTree.prototype._rotateLeft = function(node) {
	var y = node.right;
	y.parent = node.parent;

	if(y.parent === null) {
		this.root = y;
	} else {
		if(y.parent.left === node) {
			y.parent.left = y;
		} else if(y.parent.right === node) {
			y.parent.right = y;
		}
	}

	node.right = y.left;
	if(node.right !== null) {
		node.right.parent = node;
	}

	y.left = node;
	node.parent = y;
	this._updateHeight(node);
	this._updateHeight(y);
};

AVLTree.prototype._rotateRight = function(node) {
	var y = node.left;
	y.parent = node.parent;

	if(y.parent === null) {
		this.root = y;
	} else {
		if(y.parent.left === node) {
			y.parent.left = y;
		} else if(y.parent.right === node) {
			y.parent.right = y;
		}
	}

	node.left = y.right;
	if(node.left !== null) {
		node.left.parent = node;
	}

	y.right = node;
	node.parent = y;
	this._updateHeight(node);
	this._updateHeight(y);
};

// A method to print the tree
AVLTree.prototype.print = function() {
	var root = this.root;
	this._printHelper(root, 0);
};


AVLTree.prototype._printHelper = function(root, height) {
	var tab = "|\t";
    if(root === null)
         return;

    this._printHelper(root.right, height + 1);

    if(height !== 0){
        console.log(tab.repeat(height - 1) + "|-------" + root.value);
    } else {
        console.log(root.value);
    }

    this._printHelper(root.left, height + 1);
};