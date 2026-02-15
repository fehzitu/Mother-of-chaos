function pingController(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Pong!'
    }));
};

module.exports = pingController;