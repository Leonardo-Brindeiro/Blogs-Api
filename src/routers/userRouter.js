const express = require('express');
const userController = require('../controllers/user.controller');
const validateMiddlewares = require('../middlewares/validate.middlewares');

const routers = express.Router();

routers.post('/', validateMiddlewares, userController.createUser);

module.exports = routers;