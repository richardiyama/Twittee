# Twittee
cd server into server folder and run:npm install to install required packages
Run: node server.js to start the server.

# Database used
Mysql(PhpMyadmin)

# ORM used
Sequelize

# End points
# Register new user
Post: localhost:8080/api/v1/signup
# Signin
Get: localhost:8080/api/v1/signin

# Create Post
Post: localhost:8080/api/v1/twits

# Delete Post
Delete: localhost:8080/api/v1/:id

# Comment on post
Post: localhost:8080/api/v1/comments
