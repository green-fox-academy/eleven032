interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
  }

  interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }

  interface Queue {
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
  }

  interface Tree {
    empty(): boolean;
    add(value: number): void;
    remove(value: number): void;
    search(value: number): boolean
  }

  export {LinkedList, Stack, Queue, Tree};