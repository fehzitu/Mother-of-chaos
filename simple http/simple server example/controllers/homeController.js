function homeController(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'The home page!'
    }));
};

module.exports = homeController;