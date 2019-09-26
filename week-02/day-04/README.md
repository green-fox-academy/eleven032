# Algorithm Project

- You can choose which Project you'd like to work on
- Plan your work
  - How will you organize your code?
  - What classes do you need?
  - What responsibilities they will hold?
- Optimize your algorithms
  - How much is their time complexity?
  - How much is their space complexity?

## Projects

- [Minesweeper](#minesweeper)
- [Sudoku](#sudoku)
- [Hanoi](#hanoi)

## Minesweeper

Create a Command line [Minesweeper](https://en.wikipedia.org/wiki/Microsoft_Minesweeper).

The application on start should ask for an `n` and a `k` number where
  - `n x n` is going to be the dimensions of the game board
  - `k` mines is going to be there on it
  - both of them should be a positive number, the application should alert the user if the values are not correct, and prompt the question again:

```
How big the gameplay should be (n)?
> -4
That's not a valid number for the dimension!
How big the gameplay should be (n)?
>
```

After getting the initial values the application should render the board. And prompt for a field to reveal.

```
How big the gameplay should be (n)?
> 5
How many mines you'd like to find (k)?
> 7
  1 2 3 4 5
A # # # # #
B # # # # #
C # # # # #
D # # # # #
E # # # # #
What field to reveal?
>
```

When the user enters the field to reveal (eg: `B3`) the field gets revealed:
  - if it's a mine, the game is over, the user lost, the application exits
  - if it's not a mine, but has mine as neighbours, the field changes to the number counting how many neighbouring mines it has
  - if it has no mine neighbours it reveals all fields until a number should be displayed
Then asks for a field to reveal again.

```
...
What field to reveal?
> B3
  1 2 3 4 5
A # 1 0 0 0
B # 1 0 0 0
C # 2 1 1 0
D # # # 2 1
E # # # # #
What field to reveal?
>
```

The game is over and the application exits when:
  - The user reveals a mine, the user loses.
  - The user reveals each field that is not a mine, the user wins.

## Sudoku

Create a Command line [Sudoku](https://en.wikipedia.org/wiki/Sudoku) solver application.

The application should read the puzzle from a file given to it's input:

```
$ node sudoku.js puzzle.txt
```

Where the input file should contain the data like this:

```
6 _ 5 _ _ _ _ 9 _
_ _ _ _ _ 7 _ 2 _
1 _ _ _ _ _ _ _ _
_ _ _ 9 _ 8 _ _ _
_ _ _ _ _ _ 5 _ _
4 _ _ _ _ _ 1 _ 6
_ 8 _ _ _ 3 _ _ _
_ _ _ 5 1 _ _ _ _
_ 2 _ _ _ _ _ _ _
```

The program should print out the solution, and the time it took to complete the exercise:

```
Solution found in 122.909ms
6 7 5 2 8 4 3 9 1
8 9 3 1 6 7 4 2 5
1 4 2 3 9 5 7 6 8
7 1 6 9 5 8 2 3 4
2 3 8 6 4 1 5 7 9
4 5 9 7 3 2 1 8 6
9 8 1 4 2 3 6 5 7
3 6 7 5 1 9 8 4 2
5 2 4 8 7 6 9 1 3
```

Here's another input (without solution):
```
_ _ _ 9 3 _ _ _ _
_ _ _ _ _ _ _ _ _
_ 2 4 _ _ _ _ _ _
3 9 _ _ _ _ _ _ _
7 _ _ _ _ _ _ 6 _
_ _ _ _ _ 5 _ 1 _
_ _ _ 8 _ _ 9 _ 7
_ _ 5 _ _ 4 8 _ _
_ _ _ _ _ _ 3 _ _
```

## Hanoi

Create a Commandline [Hanoi Tower](https://en.wikipedia.org/wiki/Tower_of_Hanoi) solver application.

The application should read the puzzle from a file given to it's input:

```
$ node hanoi.js puzzle.txt
```

Where the input file should contain the data like this:
```
3
1 2
A B C
```

The program print out the steps to the solution and how long it took to find it:

```
Solution found in 122.909ms
Shortest solution is 3 steps:
3 A -> C
2 B -> C
1 A -> C
```

Here's another input (without solution):
```
6
7
2 5
8 9
4 1 3
A B C
```
