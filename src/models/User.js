const modelUser = (sequelize, DataTypes) => {
  const blogTable = sequelize.define('User', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.DATE,
      image: DataTypes.DATE,
  },
     {
      // tableName: 'blog' ,
      underscored: true,
     });
     return blogTable;
};

module.exports = modelUser;