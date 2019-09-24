import {ArrayQueue} from './ArrayQueue';
import {ArrayStack} from './ArrayStack';
import {MyLinkedList} from './MyLinkedList';

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
c.add('out of range', 10);
console.log(c.remove(10));