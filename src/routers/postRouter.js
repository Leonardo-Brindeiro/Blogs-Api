const express = require('express');
const { authToken } = require('../middlewares/valiToken');
const postController = require('../controllers/post.controller');

const routers = express.Router();

routers.get('/', authToken, postController.getAllpost);

module.exports = routers;