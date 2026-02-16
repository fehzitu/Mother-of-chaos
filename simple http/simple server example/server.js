const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    for (const route of routes) {
        const handled = route(req, res);
        if (handled) return;
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
    console.log(`Server is running on port ${port}`);
});