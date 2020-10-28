module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
      underscored: true
    });
  
    return Post;
  };