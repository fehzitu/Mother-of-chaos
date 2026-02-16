const pingController = require('../controllers/pingController');

function pingRoute(req, res) {
    if (req.method === 'GET' && req.url === '/ping') {
        pingController(req, res);
        return true;
    }
    return false;
}

module.exports = pingRoute;