const blogSchema = (sequelize, DataTypes) => {
    const blogTable = sequelize.define('BlogPost', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
       {
        // tableName: 'blog' ,
        underscored: true,
       });
       return blogTable;
};

module.exports = blogSchema;