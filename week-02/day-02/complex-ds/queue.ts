import {Queue} from './ds';

class ArrayQueue implements Queue{
    list:string[] = [];
    constructor(list:string[]){
        this.list = list;
    }
    empty(): boolean {
        return this.list.length==0?true:false;
    }    
    peek(): string {
        return this.list[0];
    }
    add(value: string): void {
        this.list.push(value);
    }
    remove(): string {
        return this.list.shift();
    }

    
}