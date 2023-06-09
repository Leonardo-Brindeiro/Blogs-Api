const express = require('express');
const categoryController = require('../controllers/category.controller');
const { authToken, validName } = require('../middlewares/valiToken');

const routers = express.Router();

routers.post('/', authToken, validName, categoryController.createCategory);

routers.get('/', authToken, categoryController.allGetCategory);

module.exports = routers;