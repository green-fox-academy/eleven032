import Garden from './classes';
class Playground extends Garden {
    constructor(width, length) {
        super(width, length);
        this.toys = [];
    }

    add(toy) {
        if (typeof toy === 'string') {
            this.toys.push(toy);
        }
    }
}