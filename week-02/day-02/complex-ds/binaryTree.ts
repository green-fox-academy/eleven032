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

class BinaryTree implements Tree {
    private root: Node = null;
    private nodeList:number[] = [];
    empty(): boolean {
        return this.root === null;
    }

    add(value: number): void {
        this.nodeList.push(value);
        this.root = this.addHelper(this.root, value);
    }


    private addHelper(node: Node, value: number): Node {
        let newNode = new Node(value);
        if (node == null) {
            node = newNode;
        } else {
            if (node.getLeft() === null) {
                node.right = this.addHelper(node.right, value);
            } else {
                node.left = this.addHelper(node.left, value);
            }
        }
        return node;
    }

    remove(value: number): void {
        if(this.search(value)){
            for(let i = 0; i<this.nodeList.length;i++){
                if(this.nodeList[i]===value){
                    this.nodeList.splice(i,1);
                }
            }
            let newTree = new BinaryTree();
            for(let i = 0; i<this.nodeList.length;i++){
                newTree.add(this.nodeList[i]);
            }
            this.root = newTree.getRoot();
        }
    }
    search(value: number): boolean {
        let res = false;
        for(let i of this.nodeList){
            if(i === value){
                res = true;
                break;
            }
        }
        return res;
    }



    getRoot():Node{
        return this.root;
    }


    printLevel(node:Node) :void
    { 
        if (node == null) {
            return; 
        }
        console.log(node.data + " "); 
        // first recur on left subtree 
        this.printLevel(node.left); 
  
        // then recur on right subtree 
        this.printLevel(node.right); 
  
        // now deal with the node 
        
    } 
}
export {
    BinaryTree
}