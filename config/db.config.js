module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "JAVA4real2019",
    DB: "twitteedb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };