const url = require('url');
let list = [
    {
        "id": 12,
        "name": "Forrest Gump",
        "genre": "drama"
    },
    {
        "id": 23,
        "name": "Mission Impossible 18",
        "genre": "action"
    },
    {
        "id": 1,
        "title": "a",
        "genre": "comedy"
    },
    {
        "id": 2,
        "title": "b",
        "genre": "romance"
    },
    {
        "id": 3,
        "title": "c",
        "genre": "horror"
    },
    {
        "id": 4,
        "title": "d",
        "genre": "fiction"
    },
    {
        "id": 5,
        "title": "e",
        "genre": "adventure"
    }
]
exports.moviesGet = function (req, res) {
    var response = {
        "list": list
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.moviesGenreGet = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let reqList = reqUrl.search.split('=');
    let genre = reqList[1];
    let result = [];
    list.forEach(movie => {
        if (movie.genre == genre) {
            result.push(movie);
        }
    })
    let response = {
        "list": result
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.moviesIdGet = async function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let reqList = reqUrl.pathname.split('/');
    let id = reqList[2];

    let response = await moviesIdGetHelper(Number(id));
    if (response != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } else {
        res.statusCode = 404;
        res.end('Not found this Id');
    }
}

exports.moviesIdDelete = async function (req, res) {
    // console.log(req.headers.authorization);
    if (req.headers.authorization == 'top-secret') {
        const reqUrl = url.parse(req.url, true);
        let reqList = reqUrl.pathname.split('/');
        let id = reqList[2];

        let result = await moviesIdGetHelper(id);
        if (result != null) {
            list = list.filter(movie => {
                return movie.id != id;
            })
            res.statusCode = 204;
            res.end('Removed!');
        } else {
            res.statusCode = 404;
            res.end('Not found this Id');
        }
    } else {
        res.statusCode = 403;
        res.end('No Authorization');
    }

}

exports.moviesPost = function (req, res) {
    if (req.headers.authorization == 'top-secret') {
        let body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            let postBody = JSON.parse(body);
            // console.log();

            if (postBody.id && postBody.name) {
                let flag = false;
                list.forEach(movie => {
                    if (movie.name == postBody.name) {
                        flag = true;
                    }
                })
                if (flag) {
                    res.statusCode = 409;
                    res.end('Movie already exists!');
                } else {
                    let newMovie = {
                        "id": postBody.id,
                        "name": postBody.name,
                        "genre": postBody.genre ? postBody.genre : 'unknown'
                    }
                    list.push(newMovie);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end('Post success');
                }
            } else {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end('Content missing!');
            }
        })
    } else {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.end('No Authorization ');
    }
}

exports.moviesIdPut = async function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let reqList = reqUrl.pathname.split('/');
    let id = reqList[2];
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', async function () {
        let postBody = JSON.parse(body);
        if (postBody.id && postBody.name && postBody.genre) {
            let tmp = await moviesIdGetHelper(postBody.id);
            if (tmp == null) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end('No such Id');
            } else {
                if (postBody.id != id) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end('Conflict id');
                } else {
                    list.forEach(movie => {
                        if (movie.id == postBody.id) {
                            movie.name = postBody.name;
                            movie.genre = postBody.genre;
                        }
                    });
                    let response = {
                        "list": list
                    }
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(response));
                }
            }
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end('Content miss!');
        }
    })
}

function moviesIdGetHelper(id) {
    let result = null
    list.forEach(movie => {
        if (movie.id == id) {
            result = movie;
        }
    })
    return result;
}

