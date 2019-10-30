# First Heroku Project

## Check the previously installed Heroku CLI

- Open a Git Bash
- On Windows:
  - `winpty heroku login`
- On anything else:
  - `heroku login`
- Log in using the email address and password you used when creating your Heroku
  account
- You should get `Logged in as example@mail.com`

## REST Greet counter app

- Create a new project, don't forget to `.gitignore` the `/node_modules`
- (You can use `express` today and from now on)
- Create a simple app that can greet someone and displays a greet number which is counting how
  many times this endpoint was called
- Open <http://localhost:8080/greeting?name=Adam> in your web browser
- Your output should looks like:
  ```json
  {
    "greetCount": 1,
    "content": "Hello, Adam!"
  }
  ```
- Then at next call your output should look like:
  ```json
  {
    "greetCount": 2,
    "content": "Hello, Adam!"
  }
  ```

## Deploy it!

- `heroku create`
  - You should get `Creating app... done` and some weird project name
  - **This creates a Git repository (if not created already) so whenever you do
    this make sure, you're not inside another one** (eg. your daily workshop
    repository)
- Add and commit
- `git push heroku master`
- `heroku open`
- You should get a freshly opened new web browser tab, containing your online
  server's frontend
- `heroku logs` show you the application logs
- Also try `heroku logs --tail`. It is continuously waiting for new lines, and
  display them as they appear
- Open [Heroku Dashboard](https://dashboard.heroku.com/apps). You can manage
  your projects here. You can also check the logs, application status here.
