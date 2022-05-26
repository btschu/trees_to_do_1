class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    add(value){
        if(this.root == null){
            this.root = new BTNode(value)
            return this
        }
        var runner = this.root;
        while(runner != null) {
            if (value <= runner.val) {
                if (runner.left == null) {
                    runner.left = new BTNode(value);
                    return this;
                }
                runner = runner.left
            }
            else {
                if (runner.right == null) {
                    runner.right = new BTNode(value);
                    return this;
                }
                runner = runner.right
            }
        }
    }

// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(value){
        if(this.root == null){
            return false
        }
        var runner = this.root
        while (runner != null) {
            if (runner.val == value) {
                return true
            }
            else if (value < runner.val){
                runner = runner.left
            }
            else {
                runner = runner.right
            }
        }
        return false
    }

// Create a min() method on the BST class that returns the smallest value found in the BST.
    min(){
        if(this.root == null){
            return this
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.left !=null) {
                runner = runner.left
            }
            else {
                return runner.val
            }
        }
    }

// Create a max() BST method that returns the largest value contained in the binary search tree.
    max(){
        if(this.root == null){
            return this
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.right !=null) {
                runner = runner.right
            }
            else {
                return runner.val
            }
        }
    }

// Write a size() method that returns the number of nodes (values) contained in the tree.
    size(currentNode) {
        if (currentNode == null) {
            return 0;
        }
        var leftSide = this.size(currentNode.left);
        var rightSide = this.size(currentNode.right);
        return 1 + leftSide + rightSide;
    }

// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    isEmpty() {
        if (this.root == null) {
            return true
        }
        else {
            return false
        }
    }
}

var tree = new BST()
tree.add(5).add(7).add(8).add(19).add(21).add(-11).add(89)
console.log(tree.root);
console.log(tree.min());
console.log(tree.max());
console.log(tree.isEmpty());
console.log(tree.contains(8));
console.log(tree.contains(88));
console.log(tree.size(tree.root));