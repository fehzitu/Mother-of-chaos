/*
{ ORIGINAL SIMPLE HTTP SERVER WITHOUT EXPRESS }

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: 'The home page!'
        }));
        return;
    };

    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: 'User list page!'
        }));
        return;
    };

    if (req.method === 'POST' && req.url === '/users') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: 'Create user page!',
            body: body ? JSON.parse(body) : null
        }));
        return;
    };

    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: 'Pong!'
        }));
        return;
    };

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message: 'Nothing here! Try the route /home, /users or /ping'
    }));
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});
*/

/*
Normally we would use an http module to create a server
const http = require('http');
But with express we only need to use the module itself
*/
const express = require('express');