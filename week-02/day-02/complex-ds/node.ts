class MyNode {
    data: string;
    next: MyNode;

    constructor(data: string, next: MyNode = null) {
        this.data = data;
        this.next = next;
    }
}

export{MyNode};