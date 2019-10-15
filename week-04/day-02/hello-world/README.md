# Hello World

The purpose of the project is to get familiar with:
- multiple routes
- params
- not implemented route

## Specification

### Hello world

```gherkin
Given the / route
When the page is loaded
Then i can see a message: "Hello World!"
```

### Error

```gherkin
Given the /error route
When the page is loaded
Then i can see a message like: "Something bad happened."
```

### Error code

```gherkin
Given the /error/:errorcode route
When the page is loaded
Then i can see a message like "Error: <errorcode>"
```

### Not implemented yet

```gherkin
Given a not implemented route
When the page is loaded
Then i can see a message like "This page is not implemented yet"
```
