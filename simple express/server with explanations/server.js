/*
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
*/

/*
Normally we would use an http module to create a server
const http = require('http');
But with express we only need to use the module itself
*/
const express = require('express');
// And now our app will be a function to start express
const app = express();
// Defining a simple port
const port = 3000;

/*
Normally in http we do it this way so that our server uses a port and serves it.
server.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});
*/

// In express we do it this way.
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});

// Did you notice any difference when putting the server to listen to a port between regular http and express? Exactly! It does not have! This is one of the good reasons to learn http before express itself, express only facilitates our journey in http it does not modify it and even less makes it difficult.