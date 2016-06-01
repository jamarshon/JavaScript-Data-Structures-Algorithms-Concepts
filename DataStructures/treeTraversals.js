/*
		3
	/		\
	5		2
/	\	/
1	4	6

Depth first traversal is preOrder, inOrder and postOrder
Using a stack where:
    push root node
    pop node and visit
    push right child
    push left child
is an example of preOrder
*/

// 3 5 1 4 2 6
function preOrder(root) {
    if(root === null) {
        return;
    }
    var data = root.data;
    
    console.log(data + " ");
    preOrder(root.left);
    preOrder(root.right);
}

// 1 5 4 3 6 2
function inOrder(root) {
    if(root === null) {
        return;
    }
    var data = root.data;
    
    inOrder(root.left);
    console.log(data + " ");
    inOrder(root.right);
}

// 1 4 5 6 2 3
function postOrder(root) {
    if(root === null) {
        return;
    }
    var data = root.data;
    
    postOrder(root.left);
    postOrder(root.right);
    console.log(data + " ");
}
