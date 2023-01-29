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


     blogTable.associate = (models) => {
      blogTable.hasMany(models.BlogPost,
           {foreignKey: 'Blogpost', as: 'Blogpost'});
  };

    
     return blogTable;
};

module.exports = modelUser;