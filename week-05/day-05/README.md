# REST Backend

## Materials & Resources

| Material                                                                      |  Time |
| :---------------------------------------------------------------------------- | ----: |
| [REST API concepts and examples](https://www.youtube.com/watch?v=7YcW25PHnAA) |  8:52 |
| [Serving JSON Data](https://www.youtube.com/watch?v=QxjVZFa1XUM)              |  9:30 |
| [Express Route Params](https://www.youtube.com/watch?v=MuMs1pLuT7I)           |  5:07 |
| [Handling POST Requests](https://www.youtube.com/watch?v=rin7gb9kdpk)         | 12:39 |
| [Getting Started With Postman](https://www.youtube.com/watch?v=q78_AJBGrVw)   | 10:24 |

- Install [Postman](https://www.getpostman.com/) (either the standalone app or
  the Chrome extension)

## Material Review

- What is API? What is a Web API?
  <!--
  Application Programming Interface, how can you interact with an application
  basically. Web API is a way to interact with web based applications through
  HTTP requests and responses.
   -->
- What is a web service?
  <!--
  A web application that has a web API basically.
  -->
- What is RESTful web application and what is not?
  <!--
  Any web application can be restful, not just APIs.
  A RESTful web application's endpoints should cover the basic CRUD operations
  on all types of resources while ensuring that if the same HTTP request is
  executed twice in different times, they'll return the same result. So for
  example the Todo web app has restful endpoints or even the Reddit project.
  (/upvote/5 will always upvote the 5th post) And the `/list` endpoint will
  always return the same posts (obviously the posts can be changed) But imagine
  the situation where you have an `/unseen` endpoint returning the "not seen"
  posts and also making them seen (so they won't turn up again) This is not a
  RESTful endpoint, because the server changes the posts, so executing the
  `/unseen` request again will give a totally different response.
  -->
- What are the most common HTTP methods and what are they used for?
  <!--
  GET: get data from the server (READ)
  POST: push new, not existing data to the server to be stored (CREATE)
  PUT: push modified existing data to the server to be updated (UPDATE)
  DELETE: well, try to guess it (DELETE)
  -->
- What kind of response types can an API endpoint produce?
  <!--
  Most common is JavaScript Object Notation (JSON) which is a simple way of
  describing JavaScript objects
  {
    "key": "value",
    "otherKey: [1, 2, 3]
  }
  -->
- What are the parts of the URL and how to use them?
  <!--
  protocol://domainOrHost:port/these/are/the/parts/of/the/path?parameter=value&otherParameter=value
  The protocol is fixed describing that the communication is going over HTTP.
  The domain is not something we can change in the application, but rather where
  we run the application, it's the address of the computer. (Yes, this means you
  can try out each other's work on the same network if knowing the correct IP
  address)
  -->
- What is common and what differentiates between HTTP requests and responses?
  <!--
  Common: both have headers (key-value pairs) and body (any format specified in
  the header, but overall a string) The request is sent to a url, any part of it
  can be read when handling that request. The response will have a status code
  indicating the success of the request.
  -->
- What is Postman used for?
  <!--
  Executing HTTP requests. With more configuration than a browser (where you can
  only send GET requests to the URL you specify)
  -->

## Workshop

- [Frontend](exercises/frontend/javascript.md)
  - [Doubling](exercises/doubling/README.md)
  - [Greeter](exercises/greeter/README.md)
  - [Append a](exercises/append-a/README.md)
  - [Do until](exercises/do-until/README.md)
- [Postman](exercises/postman/README.md)
- [Array handler](exercises/array-handler/README.md)
- [Reverser of the Sith](exercises/sith/README.md)
- [The Hungarian CamelIzer Service](exercises/huncam/README.md)

## Individual Workshop Review

Please follow the styleguide:
[Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Is every file in strict mode?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
