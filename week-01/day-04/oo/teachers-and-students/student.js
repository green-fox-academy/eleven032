class Student{
    learn(){
        console.log('student is learning something new');
    }

    question(t){
        t.answer();
    }
}

module.exports = Student;