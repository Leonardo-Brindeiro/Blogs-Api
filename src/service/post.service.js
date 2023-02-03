const { BlogPost, User, Category } = require('../models');
// ajuda fabio penna 
const getAllpost = async () => {
    const users = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
       { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  
    return users;
  };
  
  module.exports = {
    getAllpost,
  };