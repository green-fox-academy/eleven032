# Make an online Todo app

## Simple todo backend api

Create a simple backend for your React Todo app:

![React Todo App](../assets/todos.png)

### Setup

- Create a node/express project


### `GET /todos`

- should list all the todos from an array like:

```json
{
  "todos": [
    {
      "id": 1,
      "text": "Wake up",
      "done": true
    },
    {
      "id": 2,
      "text": "Do some work",
      "done": false
    }
  ]
}
```

### `POST /todos`

- should store the todo from the request's body in the array
- should respond with `201` and the created todo object
- should respond with `400` if `text` is missing
- the default to `done` is `false`

### `DELETE /todos/:id`

- should remove the todo with the specified id from the array
- should respond with `204` and nothing in the body
- should respond with `404` if the id does not exist

### `PUT /todos/:id`

- should update the todo with request's body content in the array
- should respond with `200` and the modified todo object
- should respond with `404` if the id does not exist

### Check it out

- Push it to heroku and see how it works live

### Prepare the frontend

- Add fetching the todos to your app when it is mounted
- Send the created todos and modifications to the backend

### Add the frontend

- Use relative paths for the fetches (so `/todos` instead of `http://localhost:3000/todos`)
- Build your frontend app: `npm run build` or `yarn build`
- Copy the generated files (`index.html`, `bundle.js` and `bundle.css`) to the static folder of your backend
- Run the backend and check out if the frontend is working with it

## Use MySQL Database

- Add `mysql` npm package to your project
- Create a database called `heroku_todos` and a `todo` table in it with the
  necessary fields
  - `id`
  - `text`
  - `completed`
- Setup database connection in the app
- Change the implementation of your endpoints to use the database
- Try out if it works!
- Change the url, username, password and database to be read out from environment variables
  - You can read environment variables in the node file like
    `process.env.ENV_VAR_NAME`
  - You can add environment variables to your operating system (probably you'll
    need to restart the terminal after that)
  - Name the variables properly like, `MYSQL_URL`, `MYSQL_USERNAME`,
    `MYSQL_PASSWORD` and `MYSQL_DB_NAME`
- Locally this will work out, but on Heroku there's no MySQL database running on
  the same machine where your app

Now you will have multiple options to set up the remote database.

### With Heroku's JawsDB MySQL

> [Verified Heroku](https://devcenter.heroku.com/articles/account-verification)
> account is required which means you have to add your credit card details
> though **everything is still going to be in the free plan.**

- On the Heroku Dashboard you can add a MySQL addon (JawsDB MySQL)
- Now you have a MySQL database usable with the deployed app, you just need to
  provide the same environment variables (Different environment, different
  values though)
- Go to the Dashboard Settings and `Reveal Config Vars`
- You'll see one already called `JAWSDB_URL`, generally looking like this:
  `protocol://username:password@host:port/dbname`
- That's almost good, but we need to separate it into the 4 necessary parts:
  - `host:port`
  - `username`
  - `password`
  - `dbname`
  - and put them in the same named variables, like in the local version

### Using [Vuk](http://vuk.greenfox.academy/)

> Vuk is a service where your mentor can create a remotely hosted MySQL 5.7
> database. **All tables will be dropped periodically.**

- Ask your mentor to create the database for you
- Log in to your database using
  `mysql -h vuk.greenfox.academy -u <GitHub handle> -p`
- Change your password using
  `ALTER USER <GitHub handle> IDENTIFIED BY '<new password>';`
- From now on you can use the database and the database name will be your GitHub
  handle

Hopefully now you have the application which when running locally uses the local
MySQL on your computer, while the deployed version uses a cloud hosted MySQL or
PSQL. This is a great setup generally for any kind of real web development
project.

## Optional

- Make an user-password based login system for the todos
