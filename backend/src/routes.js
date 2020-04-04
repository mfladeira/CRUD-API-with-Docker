const { Router } = require('express')
const UserController = require('./app/controllers/UserController')

const routes = new Router();

routes.use(function (req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.delete('/users/:id', UserController.delete)

module.exports = routes;
