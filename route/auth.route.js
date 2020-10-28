const { validateRegistration } = require("../middleware");
const controller = require("../controller/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/v1/signup",
    [
        validateRegistration.checkDuplicateEmail
    ],
    controller.signup
);
  app.post("/api/v1/signin", 
    controller.signin
  );
  
};