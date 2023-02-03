const categoryService = require('../service/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { message } = await categoryService.createCategory(name);
          
    return res.status(201).json(message);
     };

     module.exports = { createCategory };