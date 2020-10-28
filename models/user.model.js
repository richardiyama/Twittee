module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      date_created:{
        type: Sequelize.DATE
      }}, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return User;
  };