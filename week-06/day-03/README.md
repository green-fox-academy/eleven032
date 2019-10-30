# Node HTTP Server

## Objectives

- Learn how the http module works in node
- To see that there is life w/o libraries
- Get familiar with the basic features of Node.js

## Materials & Resources

| Material                                                                |    Time |
| :---------------------------------------------------------------------- | ------: |
| [How to use NodeJS without frameworks and external libraries][1]        | reading |
| *Optional*                                                              |         |
| [How to create a Node.js web app using no external packages][2]         | reading |
| [Building a Node.js static file server (files over HTTP) using ES6+][3] | reading |

## Material Review

### Ketchup, aka "You already know:"

- What is Node.js
- What are hostname and port
- What does client-server communication mean
- What are request and response
- What are the headers used for
- What is the request/response body
- What is the status code
- What is the query string
- What is the `Content-Type`
- What is JSON
- What are the http methods/verbs

### What you need to know for this workshop

- http module
  - `createServer`
  - `server.listen`
- url module
  - `url.parse(..., true/false)`
  - pathname
  - method
- `req.on()`
  - data
  - end
- res
  - `res.statusCode`
  - `res.setHeader(...)`
  - `res.end(...)`

## Workshop

- [Movie library](./movie-library.md)
- [Express](./express.md)

[1]:https://adityasridhar.com/posts/how-to-use-nodejs-without-frameworks-and-external-libraries
[2]:https://www.freecodecamp.org/news/a-no-frills-guide-to-node-js-how-to-create-a-node-js-web-app-without-external-packages-a7b480b966d2/
[3]:https://adrianmejia.com/building-a-node-js-static-file-server-files-over-http-using-es6/