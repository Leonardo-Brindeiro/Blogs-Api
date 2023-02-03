const { Category } = require('../models');

const createCategory = async (name) => {
   const createCat = await Category.create({ name });
    console.log(createCat.dataValues);
    return { type: null, message: createCat.dataValues };
  };

  module.exports = {
     
    createCategory };