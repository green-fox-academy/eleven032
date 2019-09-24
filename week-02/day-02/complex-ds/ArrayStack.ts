import {Stack} from './ds';

class ArrayStack implements Stack {
    private list:string[]=[];
    constructor(list:string[]=[]){
        this.list = list;
    }
    empty(): boolean {
        return this.list.length==0?true:false;
    }    

    peek(): string {
        return !this.empty()?this.list[this.list.length-1]:"Stack is empty!";
    }

    push(value: string): void {
        this.list.push(value);
    }

    pop(): string {
        return this.list.pop();
    }
}

export{ArrayStack};