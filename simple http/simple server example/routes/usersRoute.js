const {
    getUsers,
    createUser
} = require('../controllers/usersController');

function usersRoute(req, res) {
    if (req.method === 'GET' && req.url === '/users') {
        getUsers(req, res);
        return true;
    };

    if (req.method === 'POST' && req.url === '/users') {
        createUser(req, res);
        return true;
    };

    return false;
};

module.exports = usersRoute;