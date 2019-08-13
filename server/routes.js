const express = require('express');

// Controller
const basicController = require('./controllers/basic.controller');
const userController = require('./controllers/user.controller'); 
const postController = require('./controllers/post.controller'); 
const commentController = require('./controllers/comment.controller'); 

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User Routes
routes.post('/signup', userController.post);

// Post Routes
routes.post('/post/add', postController.post);
routes.get('/post', postController.getAll);

// Comment Routes
routes.post('/comment/add', commentController.post);


module.exports = routes;


