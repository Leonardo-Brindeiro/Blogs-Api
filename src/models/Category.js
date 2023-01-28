const modelCategory = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
     },
     {
      // tableName: 'blog' ,
      underscored: true,
     });
     return categoryTable;
};

module.exports = modelCategory;