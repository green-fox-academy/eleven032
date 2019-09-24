import {Stack} from './ds';

class ArrayStack<T> implements Stack<T> {
    private list:T[]=[];
    constructor(list:T[]=[]){
        this.list = list;
    }
    empty(): boolean {
        return this.list.length==0?true:false;
    }    

    peek(): T {
        return !this.empty()?this.list[this.list.length-1]:null;
    }

    push(value: T): void {
        this.list.push(value);
    }

    pop(): T {
        return this.list.pop();
    }
}

export{ArrayStack};