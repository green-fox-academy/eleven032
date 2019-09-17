# Josephus Problem

## What the hell is Josephus Problem?

> Flavius Josephus was a famous historian of the first century. During the
> Jewish-Roman war, he was among a band of 41 Jewish rebels trapped in a cave by
> the Romans. Preferring suicide to capture, the rebels decided to kill
> themselves. Using a method to form a circle and in clockwise direction
> everybody kills the person on his left side until everyone dies. But Josephus,
> wanted none of this suicide nonsense and therefore quickly calculated where he
> should stand in the circle so that he will be the last one (he knew who is the
> first one). So basically Josephus Problem is when you have a circle of *n*
> people standing and you want to cross out every second person step-by-step
> until only one remains. *for more detail check
> [Josephus Problem](https://en.wikipedia.org/wiki/Josephus_problem) on
> Wikipedia]*

![](https://imgur.com/7f0jIDW.gif)

## Exercise

Write a function to solve Josephus Problem. The program should ask for a number,
this number represents how many people are in the "game". The return value
should be the number of the "winning" seat.

## Examples

| number of people | number of the winning seat |
| :--------------: | :------------------------: |
|         1        |              1             |
|         2        |              1             |
|         3        |              3             |
|         7        |              7             |
|        12        |              9             |
|        41        |             19             |
