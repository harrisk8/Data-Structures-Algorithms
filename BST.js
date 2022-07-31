class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = left;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    add(data) {
        //Reference to root node
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            //Recursive function 
            const searchTree = function(node) {
                //If data is less than root node, go left
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                    node.left = new Node(data)
                    return
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
            
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else _
            current = current.right
        }
        if (current === null) {
            return null;
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            } 
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    
    remove(data) {
        const removeNode = function(node, data) {

            if (node == null) {
                return null;
            }

        
            if (data == node.data) {

                //Node has no children
                if (node.left ==  null && node.right == null) {
                    return null;
                }

                //Node has no left child
                if (node.left == null) {
                    return node.right;
                }

                //Node has no right child
                if (node.right == null) {
                    return node.right;
                }

                var tempNode = node.right;
                while (tempNode.left != null) {
                tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        } 

        this.root = removeNode(this.root, data);
    }

}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst);
