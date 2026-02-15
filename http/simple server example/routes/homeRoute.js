const homeController = require('../controllers/homeController');

function homeRoute(req, res) {
    if (req.method === 'GET' && req.url === '/home') {
        homeController(req, res);
        return true;
    }
    return false;
};

module.exports = homeRoute;