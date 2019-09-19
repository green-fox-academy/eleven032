class Counter {
    constructor() {
        this.num = 0;
    }

    add(number=1){
        this.num+=number;
    }
    get(){
        console.log(this.num.toString());
    }

    reset(){
        this.num=0;
    }
}

const a = new Counter();
a.add();
a.get();
a.add(10);
a.get();
a.reset();
a.get();