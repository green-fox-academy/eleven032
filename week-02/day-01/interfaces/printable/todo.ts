import {
    Printable
} from './printable';

class Todo implements Printable {
    name: string;
    completed: boolean;
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete(): void {
        this.completed = true;
    }

    getName(): string {
        return this.name;
    }

    getCompleted(): boolean {
        return this.completed;
    }

    printAllFields(): void {
        console.log(this.getName());
    }
}



export {
    Todo
};