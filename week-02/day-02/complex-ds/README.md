# Complex data structures

Working with more complex data structures

## Materials and resources

| Material                                                                  | Time |
| :------------------------------------------------------------------------ | ---: |
| [Linked Lists](https://www.youtube.com/watch?v=njTh_OwMljA)               | 7:42 |
| [Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)          | 5:45 |
| [Trees](https://www.youtube.com/watch?v=oSWTXtMglKE)                      | 9:57 |

### Reading

- [Linked List](https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm)
- [Stacks and queues](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
- [Graph](https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm)
- [Tree](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)

## Material Review
- Data Structure
- Interface
- Necessary methods
- Linked List
- Stack
- Queue
- Graph
- Tree
- Binary tree
- Binary search tree

## Workshop

### Interfaces

```typescript
interface LinkedList {
  add(value: string): void;
  add(index: number, value: string): void;
  get(index: number): string;
  remove(value: string): void;
  remove(index: number): string;
  size(): number;
}
```

```typescript
interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}
```

```typescript
interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}
```

```typescript
interface Tree {
  empty(): boolean;
  add(value: string): void;
  remove(value: string): void;
  search(value: string): boolean
}
```

### Implementations

- Implement the `Stack`, `Queue` interfaces using arrays
- Implement the `LinkedList` interface using your own `Node` class
- Implement the `Stack` interface using your previous `Node` class
- Implement the `Queue` interface using 2 previous `Stack` implementations
- Create a `BinaryTree` implementation for the `Tree` interface
- Create a `BinarySearchTree` implementation for the `Tree` interface
- 💪Make sure that the `BinarySearchTree` is balanced
- 💪Create a depth first search method in `BinaryTree` using a `Stack`
- 💪Create a breadth first search method in `BinaryTree` using a `Queue`
