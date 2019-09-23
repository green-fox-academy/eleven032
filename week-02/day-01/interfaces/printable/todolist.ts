import {
    Todo
} from './todo';

class TodoList {
    things: Todo[];
    constructor() {
        this.things = [];
    }

    add(thing: Todo): void {
        this.things.push(thing);
    }

    getThings(): Todo[] {
        return this.things;
    }

}

export {
    TodoList
};