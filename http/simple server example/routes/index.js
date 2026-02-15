const homeRoute = require('./homeRoute');
const usersRoute = require('./usersRoute');
const pingRoute = require('./pingRoute');

const routes = [
    homeRoute,
    usersRoute,
    pingRoute
];

module.exports = routes;