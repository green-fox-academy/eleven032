# Greetings
---
*A simple page to greet somebody.*

## What to do
* Initialize a new nodejs project.
* Install both __Express__ and __EJS__ dependencies.
* Create a `home.ejs` template for that
* Create a node web server to render templates

## How to do
* When a user visits our `/?name={name}` route, greet them on their name.
  * for `/?name=John` route, render this:
    ![media](../assets/name.png)
* When a user visits the base route (`/`) without a given name, render this page:
  * for `/`, render this:
    ![media](../assets/guest.png)
