const db = require("../models");
const Post = db.post;





exports.twits =  async(req, res) => {
  // Save Post to Database
  await Post.create({
    userId: req.body.userId,
    description: req.body.description
   

  }).
  then(posts => {
    res.send({ posts,message: "Post was created successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.deleteTwit = (req, res) => {
  const id = req.params.id;
  Post.destroy({
      where: { postId: id }
  }).then(() => {
      return id;
  }).catch(function (err) {
      console.log("delete failed with error: " + err);
      return 0;
      // handle error;
  });
};


