# Do until

This is the continuation of the previous Frontend exercise, you should extend
that with a new endpoint.

You should create a logic that can do an `action` until a specific `number`

- Create a dynamic `POST /dountil/{action}` endpoint
- That receives a number in a json object:
  ```json
  {
    "until": 15
  }
  ```
- and responds with sum or multiplication of all elements until that number:
  - eg. `/dountil/sum` with `{"until": 5}` will respond `{"result": 15}`
  - eg. `/dountil/factor` with `{"until": 5}` will respond `{"result": 120}`
- if no number is provided:
  ```json
  {
    "error": "Please provide a number!"
  }
  ```

Check your application in the browser and click on the `Try dountil endpoint`
button.
