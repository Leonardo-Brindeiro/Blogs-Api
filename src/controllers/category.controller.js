const categoryService = require('../service/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { message } = await categoryService.createCategory(name);
          
    return res.status(201).json(message);
     };

     const allGetCategory = async (_req, res) => {
        const getCat = await categoryService.allGetCategory();
        if (getCat) {
    return res.status(200).json(getCat);
        }
        return res.status(500).json({ message: '"name" is required' });
  };

     module.exports = { createCategory, allGetCategory };