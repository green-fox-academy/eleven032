# Comparable

- Check out our Comparable interface:

```typescript
interface Comparable {
  compareTo(other: Comparable): number;
  /*
   * It should return negative number if this is smaller than other
   * It should return 0 if they are the same
   * It should return positive number if this is greater than other
   */
}
```

- Get your [Domino class](../../oo/dominoes/)
- Implement the `Comparable` interface on the `Domino`
  - why? we want to compare based on the result of `Domino.compareTo`
  - more info
    [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax)
- First compare the first value and then the second

```typescript
const dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function(a: Domino, b: Domino): number {
  return a.compareTo(b);
});

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]
```

- Make your `Todo` class implement `Comparable`
- It should compare the `completed` field first
- Then the `description`
- Or if you haven't got a separate `Todo` class, or it doesn't contain fields
  like `description` and `completed`, use your
  [Thing class](../../oo/fleet-of-things)
