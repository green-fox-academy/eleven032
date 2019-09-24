import {
    MyNode
} from './node';
import {
    Stack
} from './ds';
class NodeStack implements Stack {
    private head: MyNode = null;
    private tail: MyNode = null;
    private length: number = 0;

    empty(): boolean {
        return this.length === 0 ? true : false;
    }
    peek(): string {
        if (this.empty()) {
            return 'Stack is empty!';
        }
        return this.tail.data;
    }
    push(value: string): void {
        let newNode = new MyNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    pop(): string {
        let curr = this.head;
        let prev = null;
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.tail = prev;
        return curr.data;
    }
}
export {NodeStack};