import {
    LinkedList
} from './ds';
import {
    MyNode
} from './node'
class MyLinkedList implements LinkedList {
    private head: MyNode = null;
    private length: number = 0;

    add(value: string, index ? : number): void {
        if (typeof value === 'string' && typeof index === 'undefined') {
            let newNode = new MyNode(value);
            if (this.head === null) {
                this.head = newNode;
                this.length++;
            } else {
                let curr = this.head;
                while (curr.next !== null) {
                    curr = curr.next;
                }
                curr.next = newNode;
                this.length++;
            }
        } else if (typeof index === 'number' && typeof value === 'string') {
            let count = 1;
            let curr = this.head;
            let prev: MyNode = null;
            let newNode = new MyNode(value);
            if(index > this.size()+1){
                console.log('Invalid position input!');
            } else {
                if(index === this.size()+1){
                    while (curr.next !== null && count !== index) {
                        prev = curr;
                        curr = curr.next;
                        count++;
                    }
                    curr.next = newNode;
                    this.length++;
                } else {
                    while (curr.next !== null && count !== index) {
                        prev = curr;
                        curr = curr.next;
                        count++;
                    }
                    if (count < index) {
                        console.log('No such position so far!');
                    } else if (count === index) {
                        prev.next = newNode;
                        newNode.next = curr;
                        this.length++;
                    } else {
                        console.log('Wrong parameter input!');
                    }
                }
            }
            
        }
    }

    get(index: number): string {
        let count = 1;
        let curr = this.head;
        while (curr.next !== null && count !== index) {
            curr = curr.next;
            count++;
        }
        if (count < index) {
            return 'No such position!';
        } else if (count === index) {
            return curr.data;
        }
    }

    removeItem(value: string): void {
        let curr = this.head;
        let prev: MyNode = null;
        //head situation
        if (curr.data === value && curr.next === null) {
            this.head = null;
            this.length = 0;
        } else {
            while (curr.next !== null && curr.data !== value) {
                prev = curr;
                curr = curr.next;
            }
            if (curr.data === value) {
                prev.next = curr.next;
                this.length--;
            } else if (curr.next === null && curr.data !== value) {
                console.log('No such data!');
            }
        }
    }
    remove(index: number): string {
        let count = 1;
        let curr = this.head;
        let prev: MyNode = null;
        if (index === 1) {
            this.head = curr.next;
            this.length--;
            return curr.data;
        } else {
            while (curr.next !== null && count !== index) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            if (count === index) {
                prev.next = curr.next;
                this.length--;
                return curr.data;
            } else if (curr.next === null && count < index) {
                return 'No such position!';
            }
        }
    }

    size(): number {
        return this.length;
    }
}

export {
    MyLinkedList
};