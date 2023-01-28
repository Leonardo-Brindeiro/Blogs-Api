'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id',
      },
      categoryId: {
        allowNull: false,
       
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
      },
                
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};