const express = require('express')
const postRouter = express.Router()
const { addPost,getAllPost,editPost,removePost} = require('../controllers/post.controller')

postRouter.get('/get',getAllPost)
postRouter.post('/post',addPost)
postRouter.put('/update/:id',editPost)
postRouter.delete('/delete/:id',removePost)

module.exports = postRouter