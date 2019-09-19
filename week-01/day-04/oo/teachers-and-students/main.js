const Teacher = require('./teacher'); 
const Student = require('./student');

let t = new Teacher;
let s = new Student();

s.question(t);
t.teach(s);