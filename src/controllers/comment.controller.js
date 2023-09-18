const { createComment,editComment,removeComment,getComment} = require('../services/comment.service')

const addComment = async(req,res)=>{
    try{
            const data = req.body;
            await createComment(data)
            .then(()=>{
            res.status(200).json('Comment inserted') 
           }) 
    }catch(err){
         res.status(400).json(`Erreur: ${err}`)
    }
}

const updateComment = async(req,res)=>{
    try{
            const id = req.params.id;
            const data = req.body;
            await editComment(id,data)
            .then(()=>{
                res.status(200).json('Comment updated') 
               }) 
    }catch(err){
         res.status(400).json(`Erreur: ${err}`)
    }
}

const deleteComment = async(req,res)=>{
    try{
            const id = req.params.id;
            await removeComment(id)
            .then(()=>{
                res.status(200).json('Comment deleted') 
            })
    }catch(err){
         res.status(400).json(`Erreur: ${err}`)
    }
}

const findComment = async(req,res) =>{
    try{
        const post = req.params.post
        const data = await getComment(post)
        res.status(200).json(data)
        
    }catch(err){
        res.status(400).json(err)
        console.log(`Erreur: ${err}`)
    }
}

module.exports = { addComment,updateComment,deleteComment,findComment }