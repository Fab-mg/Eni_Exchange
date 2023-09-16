 
 const {createPost,updatePost,getPost,deletePost} = require('../services/post.service')



const addPost = async(req,res)=>{
    try{
          let data = req.body
          let result = await createPost(data)
            result.then(()=>{
            res.status(200).json('Posted successfully')
          })
       }catch(err){
        res.status(400).json(`Erreur ${err}`)
       }
  }
const getAllPost = async(req,res)=>{
     try{
        let result = await getPost();
        result.then(()=>{
            res.status(200).json(result);
        })
    }catch(err){
        res.status(400).json(`Erreur:${err}`);
        console.log(err);
    }
}

const editPost = async(req,res)=>{
    try {
           let data = req.body;
           let id = req.params.id;
           let result = await updatePost(id,data)
           result.then(()=>{
            res.status(200).json('Post updated');
           })
    }catch(err){
        res.status(400).json(`Erreur:${err}`);
        console.log(err);
    }
}
const removePost = async(req,res)=>{
    try {
        let id = req.params.id;
        await deletePost(id)  

    }catch(err){
        res.status(400).json(err);
        console.log(`Erreur ${err}`);
    }
}
  module.exports = { addPost,getAllPost,editPost,removePost }