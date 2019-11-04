# The Reddit Javascript REST backend

We'll create a simple Reddit clone application, where the users can create posts
and upvote / downvote existing ones. Later on you can extend these
functionalities.

This page focuses on the RESTful backend written in Javascript. If you follow
the [API Specification](apispec.md), then you'll be able to connect the
backend with the frontend.

## User stories

### Initialize a new npm project

- use `npm init`
- you'll need `express` and `mysql` as dependencies
- do not forget to use `--save` command line flag to automatically add the
  packages to your package.json
- exclude node_modules in your .gitignore

### Check out the API Specification

- [API Specification](apispec.md)
- think about how many endpoints will be needed
- *ignore the (Optional) parts at first, those are parts of the optional tasks
  at the end*

### The Post

- setup a new local MySQL database called `reddit`
- think about the type of tables you will need and create them

### Wiring in

- create the first endpoint for [listing the posts](apispec.md#get-posts)
- connect your application to your database
- serve some static JSON to test your API endpoint
- make sure that it returns the same type of JSON object as specified

### Adding

- create the endpoint as specified for
  [adding a new post](apispec.md#post-posts)
- make sure that you receive the proper object
- and return the proper object as a response
- and also save the Post to your database

### Vote

- create the endpoints if you haven't already (for
  [upvote](apispec.md#put-postsidupvote) and
  [downvote](apispec.md#put-postsiddownvote) separately)
- the voting urls should look like this: `/posts/5/upvote` for upvoting the post
  with the id 5
- increment or decrement the score
- save it and respond with the proper object

### Connect to your frontend (if you have one)

- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)
- create a `public` folder in your project directory
- put your frontend files into that directory
- make changes so that your frontend will use the API that you have just written

### Extending functionality

- add comments
  - comments model will be needed
  - one to many relationship will be needed with the post
  - new endpoints will be needed
- add users
  - user model will be needed
  - post model will be updated
  - extend every endpoint
  - save the user with the post as one to many relationship
- a little hint for headers

```javascript
app.get("/", function(request, response) {
  console.log(request.headers);
  response.send();
});
```

- if you are done with the *add user* part of this project, you may add the features below:
  - add voting for only users
    - a user can only vote once on a post/comment
    - add vote model to connect users and posts in many-to-many relationship
    - the vote property should be 0 by default.
    - the vote property should be 1 if the user upvotes a post.
    - the vote property should be -1 if the user downvotes a post.
- add [Delete](../apispec.md#delete-postsid) /
  [Update](../apispec.md#put-postsid) functionalities and enable those only for
  the user's own posts
  - when the user updates a post, update its timestamp as well
