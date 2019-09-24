import {
    Tree
} from './ds';
import{
    ArrayStack
} from './ArrayStack';
import{
    ArrayQueue
} from './ArrayQueue';
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



    BFSsearch(value:number):boolean{
        let q = new ArrayQueue<Node>();
        q.add(this.root);
        while(!q.empty()){
            let node = q.remove();
            if(node.data === value){
                return true;
            } else {
                if(node.left!==null){
                    q.add(node.left);
                }
                if(node.right!==null){
                    q.add(node.right);
                }
                
            }
        }
        return false;
    }

    DFSsearch(value:number):boolean{
        let s = new ArrayStack<Node>();
        s.push(this.root);
        while(!s.empty()){
            let node = s.pop();
            if(node.data === value){
                return true;
            } else {
                if(node.left!==null){
                    s.push(node.left);
                }
                if(node.right!==null){
                    s.push(node.right);
                }
                
            }
        }
        return false;
    }

    // convertBalance(){
    //     let nodes:Node[] = [];
    //     this.storeBSTNodes(this.root,nodes);
    //     let n = nodes.length;
        
    //     return this.building(nodes, 0, n-1);
    // }

    // private storeBSTNodes(node: Node, nodeList: Node[]): void {
    //     //first check edge case
    //     if (node === null) {
    //         return;
    //     }
    //     this.storeBSTNodes(node.left, nodeList);
    //     nodeList.push(node); 
    //     this.storeBSTNodes(node.right, nodeList); 
    // }

    // private building(nodes:Node[], start:number, end:number):Node{
    //     if(start>end){
    //         return null;
    //     }

    //     let mid = (start+end)/2;
    //     let node = nodes[mid];

    //     node.left = this.building(nodes, start, mid-1);
    //     node.right = this.building(nodes, mid+1,end);
    //     return node;
    // }

    getRoot(): Node {
        return this.root;
    }

    print(node: Node): void {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.print(node.left);
        this.print(node.right);
    }
}

export {
    BST
}