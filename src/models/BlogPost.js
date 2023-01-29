const blogSchema = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: DataTypes.INTEGER, 
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
        {
        timestamps: false,
        underscored: true,
       });

       BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
             {foreignKey: 'User', as: 'User'});
    };


       return BlogPost;
};

module.exports = blogSchema;