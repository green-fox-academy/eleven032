interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
  }

  interface Stack<T> {
    empty(): boolean;
    peek(): T;
    push(value: T): void;
    pop(): T;
  }

  interface Queue<T> {
    empty(): boolean;
    peek(): T;
    add(value: T): void;
    remove(): T;
  }

  interface Tree {
    empty(): boolean;
    add(value: number): void;
    remove(value: number): void;
    search(value: number): boolean
  }

  export {LinkedList, Stack, Queue, Tree};