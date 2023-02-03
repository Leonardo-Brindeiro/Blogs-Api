const modelCategory = (sequelize, DataTypes) => {
    const postcatTable = sequelize.define('PostCategory', {
        postId: {
            type:DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false, 
        },
        categoryId: {
            type:DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false, 
        },
        
       },
       {
        tableName: 'posts_categories' ,
        underscored: true,
       });

///https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/88ea8152-2e8a-4a7d-a66d-b2adb7967a03/solution


       postcatTable.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            foreignKey: 'categoryId',
            otherKey: 'postId',  
            through: postcatTable,
        });
          models.BlogPost.belongsToMany(models.Category,{
            as: 'categories',
            foreignKey: 'postId',
            otherKey: 'categoryId', 
            through: postcatTable,
          });
      };


       return postcatTable;
  };
  
  module.exports = modelCategory;