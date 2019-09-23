import {
    TodoList
} from './todolist';
import {
    Todo
} from './todo';
let list = new TodoList();
let a = new Todo('a');
let b = new Todo('b');
let c = new Todo('c');
let d = new Todo('d');
let e = new Todo('e');

list.add(a);
list.add(b);
list.add(c);
list.add(d);
list.add(e);

for (let todo of list.getThings()) {
    todo.printAllFields();
}