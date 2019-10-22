# Redux Thunk

## Materials

Material | Time
-|-
[Redux Thunk Middleware](https://www.youtube.com/watch?v=z2XCUu2wIl0) | 8:46
[Async Actions](https://www.youtube.com/watch?v=h892pHdLQtM) | 10:07

## Material Review

- What is a middleware?
- What is the purpose of Redux Thunk?
- Why do we need Async Actions?
- What type of actions need to be async?
- Can I have an async action using `fetch`?
- How does an async action changes the store?

## Workshop

### The Async Incrementer

Grab your exercise from [redux components](../react-redux#redux-components) or work in the same project

Create a new Component for the `counter` which is going to have 2 input fields and a button.
- The first input should be the amount to be increase the counter with
- The second input should be the milliseconds to delay the action
- Clicking on the button dispatch an async action that resolves the counter increase after the given milliseconds passed
- Don't forget to `npm install redux-thunk` and apply the middleware to your store

### JSON PlaceHolder

Create a simple React App where you display the content from one of the [JSON PlaceHolder](https://jsonplaceholder.typicode.com/) data sets (you can choose any of them: posts, comments, albums, photos, todos or users)

- Create Redux store with necessary actions, reducer and apply the Redux Thunk middleware
- When mounting the component start the async action for fetching the data
- Update the state when it arrives
- Store only the first 10 elements in the state
- Display at least one field of the data elements (you don't need all, just a name, or title, or put the thumbnail into an image)

### My Chat Client

Create a Chat Client React App to display the messages from the [server](https://stream-vanadium.glitch.me/messages)

- Create the app
- Create the redux store with redux thunk

#### Display messages

- Display the messages in a simple format
- Display all fields of the messages except the `id`

`GET https://stream-vanadium.glitch.me/messages`

Returns `200 Ok`

Body:
```json
{
  "messages": [
    {
      "id": 0,
      "user": "Adam",
      "text": "Hello World",
      "createdAt": "2019-10-21T15:45:02.088Z"
    }
  ],
  "count": 1
}
```

- `messages` is going to be an array of `message` objects
- `message` object contains
  - `id` which is a positive integer
  - `user` string, the name of the user who sent the message
  - `text` string, the text of the message
  - `createdAt` string, the date when the message was sent

#### Send message

- Display an input and a button to send a new message
- Clicking on the button sends a `POST` request to the server containing the `user` and `text` from the input
- The user can be a hardcoded constant of your name for now

`POST https://stream-vanadium.glitch.me/messages`

Expected Request Body:
```json
{
  "user": "Your Name",
  "text": "Your message"
}
```

- `user` string, the name of the sender
- `text` string, the text of the message

Returns `200 Ok` and a created `message` object (for details see above)

Body:
```json
{
  "id": 2,
  "user": "Your Name",
  "text": "Your message",
  "createdAt": "2019-10-21T15:56:21.970Z"
}
```

#### Reload messages

Create a button to refresh the messages, to display the newly submmited messages.

- Display the button
- Send the same new fetch messages async action as with the mount
- Display the new messages
- Optionally have this functionality repeated automatically every minute

#### Optional

Extend your chat with pagination, as you probably noticed that only the last 20 message is going to be in the response.

`GET https://stream-vanadium.glitch.me/messages?page=2`

- You can send an optional query parameter with your request called `page` to request the next 20 message
- Default is `0`, so the next page is `1` and so on
- Display a button to load the next page of messages, then display them
- Clicking on the button should load another page of messages
- The button should be displayed until there are more pages (you can use the `count` which is the number of all messages)

Extend your messages with styling options:

```json
{
  "user": "Your Name",
  "text": "Your message",
  "style": {
    "background": "purple",
    "color": "white"
  }
}
```

- Only work with `color`, `background`, `font-weight` and `font-style` (all of them should be strings with proper css value)

Extend your App with a component to change the username.

- Display the current name in the form
- Changing the input should change the name directly
- So the user doesn't have to submit with a button or enter
