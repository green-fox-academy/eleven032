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
        throw new Error("Method not implemented.");
    }
    add(value: string): void {
        throw new Error("Method not implemented.");
    }
    remove(): string {
        throw new Error("Method not implemented.");
    }

    
}