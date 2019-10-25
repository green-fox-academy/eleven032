# The Gibberish translator Service

[What is the Gibberish language?](https://en.wikipedia.org/wiki/Gibberish_(language_game))

- Create a `POST /translate` endpoint
- That receives a simple json object:
  ```json
  {
    "text": "This is an example sentence.",
    "lang": "en"
  }
  ```
- And responds with the translated text and its language:
  ```json
  {
    "translated": "Thilis ilis alan elexalamplele selentelencele.",
    "lang": "gibberish"
  }
  ```
- from english translate to gibberish language
- if the input doesn't contain the text (and the language) or its empty, respond
  with:
  ```json
  {
    "error": "I can't translate that!"
  }
  ```

## Optional

- Try to implement other types of gibberish languages as well
- With the request you can specify the `into` language
