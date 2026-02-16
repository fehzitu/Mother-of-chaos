function getUsers(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'User list page!'
    }));
};

function createUser(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Create user page!',
            body: body ? JSON.parse(body) : null
        }));
    });
};

module.exports = {
    getUsers,
    createUser
};