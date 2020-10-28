const db = require("../models");

const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  };




const validateRegistration = {
  checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = validateRegistration;