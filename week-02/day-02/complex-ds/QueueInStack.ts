import {
    ArrayStack
} from './ArrayStack';
import {
    Queue
} from './ds';

class queueInStack implements Queue{
    private stackIn = new ArrayStack();
    private stackOut = new ArrayStack();
    private length = 0;
    empty(): boolean {
        return this.length===0;
    }

    peek(): string {
        while(!this.stackIn.empty()){
            this.stackOut.push(this.stackIn.pop());
        }
        return this.stackOut.peek();
    }
    add(value: string): void {
        this.stackIn.push(value);
    }
    remove(): string {
        return this.stackOut.pop();
    }
}

export {queueInStack};