const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.posting = require("../models/post.model")(sequelize, Sequelize);
db.comment = require("../models/comment.model")(sequelize, Sequelize);

db.user.hasMany(db.posting, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
});
db.user.hasMany(db.comment, {
  foreignKey: 'userId',
  as: 'comments',
  onDelete: 'CASCADE',
});

db.posting.hasMany(db.comment, {
  foreignKey: 'postId',
  as: 'comments',
  onDelete: 'CASCADE',
});

db.posting.belongsTo(db.user, {
  foreignKey: 'userId',
  as: 'author',
  onDelete: 'CASCADE',
});

db.comment.belongsTo(db.user, {
  foreignKey: 'userId',
  as: 'author'
});

db.comment.belongsTo(db.posting, {
  foreignKey: 'postId',
      as: 'posts'
});



module.exports = db;