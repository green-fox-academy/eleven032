# Frontend

We will create an application which will have a **REST backend** and a **basic
frontend** to call and test our endpoints which should do some basic actions.
Our frontend is already created so in this exercise we just have to create a
basic backend app and connect that to the frontend. Adding more endpoints and
implementing actual logic will come later in the next exercises.

## Initialization

- Create a new Node.js project `npm init -y` (if you use the `-y` your project
  will be created with default configuration)
- Our backend will use **express** so add it as a new dependency:
  `npm install express --save`
- Check that the correct `package.json` file had been created and that it has
  the necessary dependency
- Do not forget to create a proper `.gitignore` file so that your node_modules
  folder is not tracked by git

## Basic backend

- Create an `app.js` file and
  - import express - `const express = require('express');`
  - use express - `const app = express();`
  - handle `GET` requests to the `/` endpoint, and return something, e.g.:
    ```js
    app.get('/', (req, res) => {
      res.send('OK!');
    });
    ```
  - configure your app to listen on a port

Save it, start your app (`node app` or `nodemon app`) and check in your browser
that it works.

## Assets

- Download the `assets` folder from [here](./) and add it under your project
  folder
  - move the `index.html` out to your main project folder
- Rewrite your logic in `app.js` for handling `GET` requests to `/`
  - render the static `index.html` instead of just returning a basic text:
    ```js
    res.sendFile(path.join(__dirname, 'index.html'));
    ```
- Do not forget to load the `path` module - `const path = require('path');`
- Restart your app and check it in the browser. You should see a nice page with
  some buttons now.
- If you check your browser console you see some error messages, like:
  `frontend.js:1 Failed to load resource: the server responded with a status of 404 (Not Found)` -
  This is because we forgot to set how and from where should express serve our
  static files.
- Add serving static assets to serve your `assets` folder -
  `app.use(express.static('assets'));`
- Try to run your app now and check if the error is gone.

If everything is fine than proceed to the next exercises where you will actually
add more logic to your backend. If you have errors, redo the above steps to find
and resolve the issues.

Your project directory should look like this after finishing this exercise:

```text
project
│   .gitignore
│   app.js
│   index.html
│   package-lock.json
│   package.json
│
└───assets
│   │   frontend.js
│
└───node_modules
    │   ...
```

Your application in `app.js` should look like something like below. Make sure
that you understand every line:

```js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
```
