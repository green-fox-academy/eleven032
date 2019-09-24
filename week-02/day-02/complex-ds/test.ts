import {ArrayQueue} from './ArrayQueue';
import {ArrayStack} from './ArrayStack';
import {MyLinkedList} from './MyLinkedList';
import {NodeStack} from './NodeStack';
import {BinaryTree} from './BinaryTree';
import {queueInStack} from './QueueInStack';
import {BST} from './binarySearchTree';

// let a = new ArrayQueue();
// a.add('a');
// a.add('b');
// a.add('c');
// a.add('d');
// a.add('e');
// a.add('f');
// console.log(a);
// console.log(a.peek());
// console.log(a.empty());
// console.log(a.remove());
// console.log(a);


// let b = new ArrayStack();
// b.push('a');
// b.push('b');
// b.push('c');
// b.push('d');
// b.push('e');
// b.push('f');
// console.log(b);
// console.log(b.empty());
// console.log(b.peek());
// console.log(b.pop());
// console.log(b);

let c = new MyLinkedList();

//head test
c.add('a');
// console.log(c.size());
// c.removeItem('a');
// console.log(c.size());

//regular add test
c.add('b');
c.add('c');
c.add('d');
c.add('e');
// console.log(c.size());
// c.add('insert at 3', 3);
// console.log(c.get(3));


//regular remove test
// c.removeItem('insert at 3');
// console.log(c.get(3));
// c.add('insert at 3', 3);
// c.remove(3);
// console.log(c.get(3));


//tail test
// console.log(c.size());
// c.add('insert at the end', c.size()+1);
// console.log(c.size());
// console.log(c.get(c.size()));


//edge case
// c.add('out of range', 10);
// console.log(c.remove(10));

// let d = new NodeStack();
// d.push('a');
// d.push('b');
// d.push('c');
// d.push('d');
// d.push('e');
// console.log(d.empty());
// console.log(d.peek());
// console.log(d.pop());


// let e = new BinaryTree();
// e.add(5);
// e.add(9);

// e.add(22);
// e.add(1);
// e.add(2);
// e.add(3);

// e.printLevel(e.getRoot());
// console.log('/////////////////////////////////////////////');

// e.remove(22);
// e.printLevel(e.getRoot());

// let f = new queueInStack();
// f.add('a');
// f.add('b');
// f.add('c');
// f.add('d');
// f.add('e');
// f.add('f');
// console.log(f.peek());
// f.remove();
// console.log(f.peek());

let g = new BST();
g.add(8);
g.add(3);
g.add(10);
g.add(1);
g.add(6);
g.add(14);
g.add(4);
g.add(7);
g.add(13);
g.print(g.getRoot());


console.log('/////////////////////////////////////');
g.remove(8);
g.print(g.getRoot());
