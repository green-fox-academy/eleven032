# Greeter

This is the continuation of the previous Frontend exercise, you should extend
that with a new endpoint.

You should create a logic that can greet someone by his/her name and title.

- Create a `GET /greeter` endpoint
- that can receive a query parameter like `name=Petike&title=student`
- and responds with an awesome greeting json object:
  ```json
  {
    "welcome_message": "Oh, hi there Petike, my dear student!"
  }
  ```
- if any of the data is missing, respond with one of the following error
  messages:
  ```json
  {
    "error": "Please provide a name and a title!"
  }
  ```
  ````json
  {
    "error": "Please provide a title!"
  }
  ```
  ```json
  {
    "error": "Please provide a name!"
  }
  ````

Check your application in the browser and click on the `Try greeter endpoint`
button.
