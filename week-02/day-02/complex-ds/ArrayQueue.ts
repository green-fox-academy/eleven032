import {Queue} from './ds';

class ArrayQueue<T> implements Queue<T>{
    private list:T[] = [];
    constructor(list:T[]=[]){
        this.list = list;
    }
    empty(): boolean {
        return this.list.length==0?true:false;
    }    
    peek(): T {
        return this.list[0];
    }
    add(value: T): void {
        this.list.push(value);
    }
    remove(): T {
        return this.list.shift();
    }
}

export{ArrayQueue};