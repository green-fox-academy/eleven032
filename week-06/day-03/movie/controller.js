const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    const service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    // console.log(reqUrl);
    if (reqUrl.pathname == '/movies' && reqUrl.search == null && req.method === 'GET') {
        service.moviesGet(req, res);
    } else if (reqUrl.pathname == '/movies' && reqUrl.search == null && req.method === 'POST') {
        if (req.headers.authorization == 'top-secret') {
            service.moviesPost(req, res);
        } else {
            res.statusCode = 403;
            res.end('No Authorization');
        }
    } else if (reqUrl.pathname == '/movies' && reqUrl.search != null && req.method === 'GET') {
        let param = reqUrl.search.slice(1, 6);
        if (param == 'genre') {
            service.moviesGenreGet(req, res);
        } else {
            res.statusCode = 404;
            res.end('Not a filter!');
        }
    } else if (reqUrl.pathname.length > 7 && reqUrl.search == null && req.method === 'GET') {
        service.moviesIdGet(req, res);
    } else if (reqUrl.pathname.length > 7 && reqUrl.search == null && req.method === 'DELETE') {
        service.moviesIdDelete(req, res);
    } else if (reqUrl.pathname.length > 7 && reqUrl.search == null && req.method === 'PUT') {
        if (req.headers.authorization == 'top-secret') {
            service.moviesIdPut(req, res);
        } else {
            res.statusCode = 403;
            res.end('No Authorization');
        }
    } else {
        res.statusCode = 404;
        res.end('Not found!');
    }

});

