# Reddit Application API spec

## `GET /posts`

### Request

Headers:

- Accept: `application/json`
- (Optional) Username: username

### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "posts": [
    {
      "id": 25,
      "title": "Dear JavaScript",
      "url": "http://9gag.com",
      "timestamp": 1494339525,
      "score": 791,
      (Optional) "owner": null,
      (Optional) "vote": 1,
      (Optional) "comments": 3
    },
    {
      "id": 74,
      "title": "Crockford",
      "url": "http://9gag.com",
      "timestamp": 1494138425,
      "score": 567,
      (Optional) "owner": "kristof4",
      (Optional) "vote": -1,
      (Optional) "comments": 2
    }
  ]
}
```

## `POST /posts`

### Request

Headers:

- Accept: `application/json`
- Content-Type: `application/json`
- (Optional) Username: Kristof4

Body:

```json
{
  "title": "Crockford",
  "url": "http://9gag.com"
}
```

### Response

Status Code: 201

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "id": 74,
  "title": "Crockford",
  "url": "http://9gag.com",
  "timestamp": 1494138425,
  "score": 0,
  (Optional) "owner": "kristof4",
  (Optional) "vote": 0
}
```

## `PUT /posts/<id>/upvote`

### Request

Headers:

- Accept: `application/json`
- (Optional) Username: username

### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "id": 74,
  "title": "Crockford",
  "url": "http://9gag.com",
  "timestamp": 1494138425,
  "score": 1,
  (Optional) "owner": "kristof4",
  (Optional) "vote": 1
}
```

## `PUT /posts/<id>/downvote`

### Request

Headers:

- Accept: `application/json`
- (Optional) Username: username

### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "id": 74,
  "title": "Crockford",
  "url": "http://9gag.com",
  "timestamp": 1494138425,
  "score": -1,
  (Optional) "owner": "kristof4",
  (Optional) "vote": -1
}
```

## Optional Feature endpoints

### `GET /posts/<id>/comments`

#### Request

Headers:

- Accept: `application/json`

#### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

```json
{
  "id": 25,
  "title": "Dear JavaScript",
  "url": "http://9gag.com",
  "timestamp": 1494339525,
  "score": 791,
  (Optional) "owner": null,
  (Optional) "vote": 1,
  "comments": [
    {
      "id": 17,
      "text": "Yes it is!",
      "score": 12
      (Optional) "owner": "someone"
    },
    {
      "id": 22,
      "text": "No it's not!",
      "score": 9,
      (Optional) "owner": "someoneElse"
    },
    {
      "id": 11,
      "score": 8,
      "text": "That's a good post!",
      (Optional) "owner": "someone"
    }
  ]
}
```

### `POST /posts/<id>/comments`

#### Request

Headers:

- Accept: `application/json`
- Content-Type: `application/json`
- (Optional) Username: username

#### Response

Status Code: 201

Headers:

- Content-Type: `application/json`
```json
{
  "id": 17,
  "text": "Yes it is!",
  "score": 0
  (Optional) "owner": "someone"
}
```

### `PUT /posts/<id>/comments/<vote>`

- if `<vote>` is `upvote` the score should be increased
- if `<vote>` is `downvote` the score should be decreased

#### Request

Headers:

- Accept: `application/json`
- Content-Type: `application/json`

#### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

```json
{
  "id": 17,
  "text": "Yes it is!",
  "score": 1
  (Optional) "owner": "someone"
}
```

### `DELETE /posts/<id>`

#### Request

Headers:

- Accept: `application/json`
- (Optional) Username: username

#### Response

Status Code: 204

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "id": 25,
  "title": "Dear JavaScript",
  "url": "http://9gag.com",
  "timestamp": 1494339525,
  "score": 791,
  "owner": null,
  "vote": 1
}
```

### `PUT /posts/<id>`

#### Request

Headers:

- Accept: `application/json`
- Content-Type: `application/json`
- Username: username

Body:

```json
{
  "title": "modified title",
  "url": "http://facebook.com"
}
```

#### Response

Status Code: 200

Headers:

- Content-Type: `application/json`

Body:

```json
{
  "id": 25,
  "title": "modified title",
  "url": "http://facebook.com",
  "timestamp": 1494339525,
  "score": 791,
  "owner": null,
  "vote": 1
}
```
