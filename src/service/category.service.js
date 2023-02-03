const { Category } = require('../models');

const createCategory = async (name) => {
   const createCat = await Category.create({ name });
    console.log(createCat.dataValues);
    return { type: null, message: createCat.dataValues };
  };

  const allGetCategory = async () => {
    const getCat = await Category.findAll();
      return getCat;
  };

  module.exports = {
     
    createCategory,
    allGetCategory,
   };