const db = require("../models");
const Comment = db.comment;





exports.comments =  async(req, res) => {
  // Save Comment to Database
  await Comment.create({
    description: req.body.description,
    userId: req.body.userId,
    postId: req.body.postId

  }).
  then(comment => {
    res.send({ comment,message: "Comment was created successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
