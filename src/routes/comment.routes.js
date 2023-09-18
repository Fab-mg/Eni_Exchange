const {addComment,deleteComment,updateComment,findComment}  = require('../controllers/comment.controller');
const express = require('express');
const commentRouter = express.Router()

commentRouter.get('/get/:post',findComment);
commentRouter.post('/post',addComment);
commentRouter.put('/update/:id',updateComment);
commentRouter.delete('/delete/:id',deleteComment);

module.exports = commentRouter ;