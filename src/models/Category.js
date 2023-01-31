const model = (sequelize, DataTypes) => {
  const modelCategory = sequelize.define('Category', {
    id: {
      type:DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
  }, 
      name: DataTypes.STRING,
     },
     {
      // tableName: 'blog' ,
      underscored: true,
     });
     return modelCategory;
};

module.exports = model;