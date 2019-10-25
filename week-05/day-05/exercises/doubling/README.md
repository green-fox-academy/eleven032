# Doubling

This is the continuation of the previous Frontend exercise, you should extend
that with a new endpoint.

You should create a logic that can double the provided number.

- Create a `GET /doubling` endpoint
- It should be able to handle a query parameter called `input`, eg.
  `http://localhost:8080/doubling?input=15`
- This endpoint should respond with a json object with the doubled amount of the
  input:
  ```json
  {
    "received": 15,
    "result": 30
  }
  ```
- If no input is provided it should return:
  ```json
  {
    "error": "Please provide an input!"
  }
  ```

Check your application in the browser and click on the `Try doubling endpoint`
button.
