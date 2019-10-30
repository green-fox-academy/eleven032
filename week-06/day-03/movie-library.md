# Movie library

Create a simple web server in Node.JS where you can manage your movie library.

- it is enough to store the movies in an array which will be created on start up
- your movies are accessible through the `/movies` path but you need to pay
  attention to the HTTP method
  - `[GET] movies`
  - `[GET] movies/{movieId}`
  - `[DELETE] movies/{movieId}`
  - `[POST] movies`
  - `[PUT] movies/{movieId}`

The movie has 3 fields:

- id: the numeric id of the movie
- title: the movie's title
- genre: which can be unknown or a genre

## `[GET] /movies`

This endpoint returns your movies in a simple json. Movies can be filtered by
genre with a query parameter. Like: `/movies?genre=action`

**Example response to `[GET] /movies`:**

```json
[
  {
    "id": 12,
    "title": "Forrest Gump",
    "genre": "drama"
  },
  {
    "id": 23,
    "name": "Mission Impossible 18",
    "genre": "action"
  },
]
```

## `[GET] /movies/{movieId}`

This should return the corresponding movie as a json object, if there is no
movie with `movieId` then you should return `404`.

**Example response to `[GET] /movies/23`:**

```json
{
  "id": 23,
  "name": "Mission Impossible 18",
  "genre": "action"
}
```

## `[DELETE] /movies/{movieId}`

This endpoint should remove the movie from the list and return `204` status code
w/o any response body. Additionally:

- if there is no matching movie, it should return `404`
- if the request's `Authorization` header's value is not equals to `top-secret`
  the endpoint should return `403` with a descriptive response body

## `[POST] /movies`

This endpoint is used to create a new movie entry and returns `201` status code
if everything went well. The movie details should be read from the request body
and you can focus only on JSON content. You also need to pay attention to the
following requirements:

- if genre is missing then `unknown` is the default
- if the title is missing you should return `400`
- you need to authorize the request just like with the delete endpoint
- if there is already a movie with the same title, please return with 409 status
  code

## `[PUT] /movies/{movieId}`

This endpoint will update an existing movie. The following requirements are set:

- each field must be present in the request body, otherwise `400`
- request must be authorized like the previous requests
- if the id in the body is not the same as the id in the url you should return
  `400`
- `404` if there is no movie with the id
- if everything went well, it should return the updated movie with `200` as status code

## Extra

- send `405` if a PUT request is sent to the `/movies` endpoint
- send `404` if a request sent to any endpoint-method pair which is not listed
  above
