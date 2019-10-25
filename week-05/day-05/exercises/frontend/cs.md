# Frontend

Today your job is to create the backend part of the application for an existing
frontend app provided as an HTML and JavaScript file below.

- First create a new empty .NET Core Web Application
- Add middlewares (mind the order):
  - `app.UseFileServer();` to serve the HTML and JavaScript files
  - `app.UseMvc();`
  - `app.UseStaticFiles();`
  - `app.UseDefaultFiles();`
- Create a `HomeController` with a single endpoint to `/`
  - The method should `return File("index.html", "text/html")` here
- Download the `frontend.js` and the `index.html` file from [here](./assets) and
  place the JavaScript and the HTML file under `wwwroot` folder
- Try to run your app and check the index page
- If you see a nice page where you can test the following exercises, proceed to
  the next one.
