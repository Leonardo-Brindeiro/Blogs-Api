const modelUser = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    id: {
      type:DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
  }, 
      
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  },
     {
      timestamps: false,
      underscored: true,
     });


     userModel.associate = (models) => {
      userModel.hasMany(models.BlogPost,
           {foreignKey: 'userId', as: 'posts'});
  };

    
     return userModel;
};

module.exports = modelUser;