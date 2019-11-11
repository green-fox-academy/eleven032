# Git Pro Workshop for working in teams

Learn how we can use Git for working in teams

## Training

| Material                                                             |                      Time |
| :------------------------------------------------------------------- | ------------------------: |
| [Learn Git Branching](http://learngitbranching.js.org/)              | play with the modules 2/3 |
| [GIT Branching](https://www.youtube.com/watch?v=a6D-9MIdWKk)         |                      6:32 |
| [Working with Branches](https://www.youtube.com/watch?v=JTE2Fn_sCZs) |                      6:36 |
| [Pull requests](https://www.youtube.com/watch?v=FQsBmnZvBdc)         |                      5:58 |

## Workshop for Teams

### Do this as a Team in a group

- only once, not every team member separately
- choose base language
  - Python
  - JavaScript
  - Java
  - C#
- hint: no need for framework (eg. spring/express/ASP.NET or any
  package/library), just plain old #language
- create a repo and a project
- create a gitignore file with appropriate content for the chosen language
- commit and push these together, so every team member will have the same
  initialized project
- assign your team members to
  - Member A
  - Member B
  - Member C
  - Member D (only if there's 4 person in your group)
- if you have 3 members ignore the Member D tasks section, the (d)-s, and when
  you need to 'Do only one:' then choose the task for 3 members
- if you have 4 members when you need to 'Do only one:' then choose the task for
  4 members
- wait for commits on remote means refreshing the github so you can check if the
  the commit is pushed
- and after this follow your section separately

### Member A tasks

- clone the empty project repo
- create a method (this will be referenced as your method from now on), called
  `greet` in a file/class of your choice that prints out your name
- commit as 'a1' and push
- wait for abc(d)1 commits then pull
- you should have 3(4 if there's D) files with 3(4 if there's D) methods
- modify your method to have one parameter and print that out
- commit as 'a2' and push
- modify `count` method to print out the number of the month you're born in
- wait for abc(d)2 commit on remote
- commit as 'a3' and push
- examine the conflicts
  - check what change is yours, whats not
  - what is HEAD
- resolve conflicts (remove the `<<<` and `>>>` lines, and merge the code)
- commit as 'a4' and push
- wait for abc(d)4 commits then pull
- create a branch called `yourname-twoparam`
  - good branch names always indicates the creators name and the feature they
    plan to work on
  - hint: `git checkout -b branchname`
- modify your method to have two parameters and print out both
- commit as 'a5' and push
  - hint: you'll need to specify the remote and the remote branch, since this is
    the first commit of this branch
  - now you should have the branch on github as well, check that!
- do a simple merge locally
  - checkout the master branch (this will be the branch you're merging **to**)
  - `git merge branchname_youremerging_from`
  - see? if there are no conflicts merge is done easily :)
- now push the master branch
- wait for abc(d)5 commits in remote's master branch
- checkout your feature branch again
- Do only one:
  - 3 members: modify the `cheer` method to print out 'Cheer for the
    `parameter`'
  - 4 members: modify the `future` method to print out 'Your future looks like
    `parameter`'
- commit as 'a6' and push to your branch
- go on github and create a pull request
  - base fork should be the master branch
  - head fork should be your branch
  - this will create a request on github for your changes to be merged
    automatically to the master branch
  - You can set a title and a description to describe the changes
  - Do only one:
    - 3 members: Select Member C for assignee (who will review and accept your
      request)
    - 4 members: Select Member D for assignee (who will review and accept your
      request)
- wait for Member B's pull request, check it
  - there should be a the title, the description, the commits, and you can see
    the changes made
  - there should be a big Accept this Pull Request button, currently in disabled
    state
  - tell Member B that she/he needs to resolve conflicts on that branch for this
    PR to be acceptable
- probably you got the same instruction so resolve the conflict on your PR
  - if you're not on that branch, checkout
  - merge in the master branch
  - hint: remember be on the branch you want to merge *to*
  - now you want to merge to your branch
- wait for Member B's PR's update on Github
  - if its acceptable, accept it

### Member B tasks

- clone the empty project repo
- create a method (this will be referenced as your method from now on), called
  `count` in a file/class of your choice that prints out your age
- commit as 'b1' and push
- wait for abc(d)1 commits then pull
- you should have 3(4 if there's D) files with 3(4 if there's D) methods
- modify your method to have one parameter and print that out
- commit as 'b2' and push
- modify `cheer` method to print out your chosen base language
- wait for abc(d)2 commit on remote
- commit as 'b3' and push
- examine the conflicts
  - check what change is yours, whats not
  - what is HEAD
- resolve conflicts (remove the `<<<` and `>>>` lines, and merge the code)
- commit as 'b4' and push
- wait for abc(d)4 commits then pull
- create a branch called `yourname-twoparam`
  - good branch names always indicates the creators name and the feature they
    plan to work on
  - hint: `git checkout -b branchname`
- modify your method to have two parameters and print out both
- commit as 'b5' and push
  - hint: you'll need to specify the remote and the remote branch, since this is
    the first commit of this branch
  - now you should have the branch on github as well, check that!
- do a simple merge locally
  - checkout the master branch (this will be the branch you're merging *to*)
  - `git merge branchname_youremerging_from`
  - see? if there are no conflicts merge is done easily :)
- now push the master branch
- wait for abc(d)5 commits in remote's master branch
- checkout your feature branch again
- modify the `greet` method to print out 'Greetings for the `parameter`'
- commit as 'b6' and push to your branch
- go on github and create a pull request
  - base fork should be the master branch
  - head fork should be your branch
  - this will create a request on github for your changes to be merged
    automatically to the master branch
  - You can set a title and a description to describe the changes
  - Select Member A for assignee (who will review and accept your request)
- wait for Member C's pull request, check it
  - there should be a the title, the description, the commits, and you can see
    the changes made
  - there should be a big Accept this Pull Request button, currently in disabled
    state
  - tell Member C that she/he needs to resolve conflicts on that branch for this
    PR to be acceptable
- probably you got the same instruction so resolve the conflict on your PR
  - if you're not on that branch, checkout
  - merge in the master branch
  - hint: remember be on the branch you want to merge *to*
  - now you want to merge to your branch
- wait for Member C's PR's update on Github
  - if its acceptable, accept it

### Member C tasks

- clone the empty project repo
- create a method (this will be referenced as your method from now on), called
  `cheer` in a file/class of your choice that prints out the team name
- commit as 'c1' and push
- wait for abc(d)1 commits then pull
- you should have 3(4 if there's D) files with 3(4 if there's D) methods
- modify your method to have one parameter and print that out
- commit as 'c2' and push
- Do only one:
  - 3 members: modify `greet` method to print out 'Greetings!'
  - 4 members: modify `future` method to print out your Chinese horoscope sign
- wait for abc(d)2 commit on remote
- commit as 'c3' and push
- examine the conflicts
  - check what change is yours, whats not
  - what is HEAD
- resolve conflicts (remove the `<<<` and `>>>` lines, and merge the code)
- commit as 'c4' and push
- wait for abc(d)4 commits then pull
- create a branch called `yourname-twoparam`
  - good branch names always indicates the creators name and the feature they
    plan to work on
  - hint: `git checkout -b branchname`
- modify your method to have two parameters and print out both
- commit as 'c5' and push
  - hint: you'll need to specify the remote and the remote branch, since this is
    the first commit of this branch
  - now you should have the branch on github as well, check that!
- do a simple merge locally
  - checkout the master branch (this will be the branch you're merging *to*)
  - `git merge branchname_youremerging_from`
  - see? if there are no conflicts merge is done easily :)
- now push the master branch
- wait for abc(d)5 commits in remote's master branch
- checkout your feature branch again
- modify the `count` method to print out 'Counting the countless `parameter`'
- commit as 'c6' and push to your branch
- go on github and create a pull request
  - base fork should be the master branch
  - head fork should be your branch
  - this will create a request on github for your changes to be merged
    automatically to the master branch
  - You can set a title and a description to describe the changes
  - Select Member B for assignee (who will review and accept your request)
- Do only one:
  - 3 members: wait for Member A's pull request, check it
  - 4 members: wait for Member D's pull request, check it
- there should be a the title, the description, the commits, and you can see the
  changes made
  - there should be a big Accept this Pull Request button, currently in disabled
    state
  - Do only one:
    - 3 members: tell Member B that she/he needs to resolve conflicts on that
      branch for this PR to be acceptable
    - 4 members: tell Member D that she/he needs to resolve conflicts on that
      branch for this PR to be acceptable
- probably you got the same instruction so resolve the conflict on your PR
  - if you're not on that branch, checkout
  - merge in the master branch
  - hint: remember be on the branch you want to merge *to*
  - now you want to merge to your branch
- Do only one:
  - 3 members: wait for Member B's PR's update on Github
  - 4 members: wait for Member D's PR's update on Github
- if its acceptable, accept it

### Member D tasks

- clone the empty project repo
- create a method (this will be referenced as your method from now on), called
  `future` in a file/class of your choice that prints out your horoscope sign
- commit as 'd1' and push
- wait for abc(d)1 commits then pull
- you should have 3(4 if there's D) files with 3(4 if there's D) methods
- modify your method to have one parameter and print that out
- commit as 'd2' and push
- modify `greet` method to print out 'Greetings!'
- wait for abc(d)2 commits on remote
- commit as 'd3' and push
- examine the conflicts
  - check what change is yours, whats not
  - what is HEAD
- resolve conflicts (remove the `<<<` and `>>>` lines, and merge the code)
- commit as 'd4' and push
- wait for abc(d)4 commits then pull
- create a branch called `yourname-twoparam`
  - good branch names always indicates the creators name and the feature they
    plan to work on
  - hint: `git checkout -b branchname`
- modify your method to have two parameters and print out both
- commit as 'd5' and push
  - hint: you'll need to specify the remote and the remote branch, since this is
    the first commit of this branch
  - now you should have the branch on github as well, check that!
- do a simple merge locally
  - checkout the master branch (this will be the branch you're merging *to*)
  - `git merge branchname_youremerging_from`
  - see? if there are no conflicts merge is done easily :)
- now push the master branch
- wait for abc(d)5 commits in remote's master branch
- checkout your feature branch again
- modify the `cheer` method to print out 'Cheer for the `parameter`'
- commit as 'd6' and push to your branch
- go on github and create a pull request
  - base fork should be the master branch
  - head fork should be your branch
  - this will create a request on github for your changes to be merged
    automatically to the master branch
  - You can set a title and a description to describe the changes
  - Select Member C for assignee (who will review and accept your request)
- wait for Member A's pull request, check it
  - there should be a the title, the description, the commits, and you can see
    the changes made
  - there should be a big Accept this Pull Request button, currently in disabled
    state
  - tell Member A that she/he needs to resolve conflicts on that branch for this
    PR to be acceptable
- probably you got the same instruction so resolve the conflict on your PR
  - if you're not on that branch, checkout
  - merge in the master branch
  - hint: remember be on the branch you want to merge *to*
  - now you want to merge to your branch
- wait for Member A's PR's update on Github
  - if its acceptable, accept it
