// http import
const http = require('http');

// server is an http function
const server = http.createServer((req, res) => {
	// some logs to see the important part of request
	/*
	console.log('method:\n', req.method, '\n'); // req method
	console.log('url:\n', req.url, '\n'); // url from the req
	console.log('header:\n', req.headers, '\n'); // header from the request
	*/

	// some status code & methods usage to make routes
	if (req.method === 'GET' && req.url === '/home') {
		// here we make the head to the status 200 response
		res.writeHead(200 /* set the status code */, {
			'Content-Type': 'application/json'
		} /* this object set the header type, without this the client don't know what he receive */);
		// here we finish the response
		res.end(JSON.stringify({
			message: 'The home page!'
		}));
		return;
	}; // curl http://localhost:3000/home

	// clean /users route without comments
	if (req.method === 'GET' && req.url === '/users') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: 'User list page!'
		}));
		return;
	}; // curl http://localhost:3000/users

	// route "post" to create an user
	if (req.method === 'POST' && req.url === '/users') {
		// body chunks (the most important), here we need to understand one important concept: we receive every request body in chunks
		let body = '';
		// function to use when we receive an request
		// 'data' is every data on this chunks we receive
		req.on('data', (chunk) => {
			body += chunk.toString();
		} /* arrow function to do something when we get the request */);
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: 'Create user page!',
			body: body ? JSON.parse(body) : null
		}));
		return;
		// disclaimer: only on 'POST' & 'PUT' methods we receive the body in chunks
	}; // curl -X POST http://localhost:3000/users

	// my own route (to tests)
	if (req.method === 'GET' && req.url === '/ping') {
		// on this route i will make the 'ping-pong'
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: 'Pong!'
		}));
		return;
	}; // curl http://localhost:3000/ping

	// here we make the head to the status 404 response
	res.writeHead(404, {
		'Content-Type': 'application/json'
	});
	// here we finish the response
	res.end(JSON.stringify({
		message: 'Nothing here! Try the route /home, /users or /ping'
	}));
});

// server port
const port = 3000;

// here we put the server to listen the port 3000
server.listen(port, () => {
	console.log(`Server running on port: http://localhost:${port}`);
});