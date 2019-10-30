# Home made express

Now let's create our own express library. We won't give you any restriction on
the implementation, just show you how we want to use your library.

## Get access to the library

It should be a module, so work in a separated (or more separated files). The
user must import only one module.

```js
const fakeExpress = require('./fake-express');
const app = fakeExpress();
```

## `app.listen()`

The web server must be started just like the original one.

```js
const fakeExpress = require('./fake-express');
const PORT = 3000;

const app = fakeExpress();

app.listen(PORT, _ => console.log(`App is running on ${PORT}`))
```

The node server can listen on `'localhost'`.

## Handle endpoints

The user must be able to add new endpoints just like with the original express:

```js
app.get('/my-endpoint', (req, res) => {
  ...
});
```

At this time `req` and `res` can be simple native objects, what you retrieved
from the http module.
Also, it is enough to implement `.get` and `.post`, you don't need to handle all
the methods.

## Improve the response object

Now it is time, to create our custom response object. Let's pass a wrapper
object to the callback method, so the user can call the common methods what are
used in express.

```js
app.get('/my-endpoint', (req, res) => {
  // this should send an empty response with the correct status code
  res.sendStatus();
  // this should send the response with 200, it is enough if you send only json responses
  res.send(response);
  // this should set the status code but doesn't send an response
  res.status();
  // this should set a new response header
  res.set('Header-field', 'Value');
});
```

## Improve the request object

Now let's work with out request. The user definitely needs to access the request
and its properties. So please pass an improved request object to the callback
and also implement the path variables feature.

```js
app.get('/my-endpoint/{pathVariable}', (req, res) => {
  // this prints the value of the path variable
  console.log(req.params.pathVariable);
  // this prints the query params in an object
  console.log(req.query);
  // this prints the query body in an object, it is enough if you handle only JSON body
  console.log(req.body);
});
```

### Extra

You can add type annotation to the path variables, just like in express.

## Static middleware

Now if you get here then it is time to dig deeper and implement the static file
handling. The user must be able to add some static folder to the app. If the server
receives a request which is matching to any file in the static folder then it
should serve that file with the proper mime type. The user must be able to set
more static folders by calling the static method multiple times.

```js
app.static('./public');
app.static('./assets');
```

## If you want more

Possible extensions:

- support different content-types
- middleware eg: for request logging
  - per endpoint middleware
  - global middleware
- support ejs as view engine
