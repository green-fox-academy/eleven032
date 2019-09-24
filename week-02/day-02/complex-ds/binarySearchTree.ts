import {
    Tree
} from './ds';

class Node {
    data: number;
    left: Node;
    right: Node;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getRight() {
        return this.right;
    }

    getLeft() {
        return this.left;
    }
}
class BST implements Tree {
    private root: Node;
    constructor() {
        this.root = null;
    }

    empty(): boolean {
        return this.root === null;
    }

    add(value: number): void {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addHelper(this.root, newNode);
        }
    }

    private addHelper(node: Node, newNode: Node) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.addHelper(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addHelper(node.right, newNode);
            }
        }
    }

    remove(value: number): void {
        this.root = this.removeHelper(this.root, value);
    }

    private removeHelper(node: Node, value: number): Node {
        if (this.root === null) {
            return this.root;
        }

        /* Otherwise, recur down the tree */
        if (value < node.data)
            node.left = this.removeHelper(node.left, value);
        else if (value > node.data)
            node.right = this.removeHelper(node.right, value);

        // if key is same as root's key, then This is the node 
        // to be deleted 
        else {
            // node with only one child or no child 
            if (node.left === null)
                return node.right;
            else if (node.right == null)
                return node.left;

            // node with two children: Get the inorder successor (smallest 
            // in the right subtree) 
            node.data = this.minValue(node.right);

            // Delete the inorder successor 
            node.right = this.removeHelper(node.right, node.data);
        }

        return node;
    }

    private minValue(node: Node): number {
        let minValue = node.data;
        while (node.left != null) {
            minValue = node.left.data;
            node = node.left;
        }
        return minValue;
    }

    search(value: number): boolean {
        if (this.root === null) {
            return false;
        } else {
            return this.searchHelper(this.root, value);
        }
    }

    private searchHelper(node: Node, value: number): boolean {
        if (node.data === value) {
            return true;
        } else if (value < node.data) {
            if (node.left === null) {
                return false;
            } else {
                return this.searchHelper(node.left, value);
            }
        } else {
            if (node.right === null) {
                return false;
            } else {
                return this.searchHelper(node.right, value);
            }
        }
    }

    getRoot():Node{
        return this.root;
    }

    print(node : Node):void{
        if(node === null){
            return;
        }
        console.log(node.data); 
        this.print(node.left);
        this.print(node.right); 
    }
}

export {BST}