const express = require('express');
const userController = require('../controllers/user.controller');
const validateMiddlewares = require('../middlewares/validate.middlewares');
const { authToken } = require('../middlewares/valiToken');

const routers = express.Router();

routers.post('/', validateMiddlewares, userController.createUser);

routers.get('/', authToken, userController.allGetUsers);

routers.get('/:id', authToken, userController.allGetUsersById);

module.exports = routers;