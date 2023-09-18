 
 const {createPost,updatePost,getPost,deletePost} = require('../services/post.service')



const addPost = async(req,res)=>{
    try{
          let data = req.body
           await createPost(data)
           .then(()=>{
            res.status(200).json('Posted successfully')
           })
       }catch(err){
        res.status(400).json(`Erreur ${err}`)
       }
  }
const getAllPost = async(req,res)=>{
     try{
         const result=await getPost()
         res.status(200).json(result)
    }catch(err){
        res.status(400).json(`Erreur:${err}`);
        console.log(err);
    }
}

const editPost = async(req,res)=>{
    try {
           let data = req.body;
           let id = req.params.id;
           await updatePost(id,data)
           .then(()=>{
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
            .then(()=>{
                res.status(200).json('Post deleted');
            })
    }catch(err){
        res.status(400).json(err);
        console.log(`Erreur ${err}`);
    }
}
  module.exports = { addPost,getAllPost,editPost,removePost }