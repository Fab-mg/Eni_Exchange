const Comment = require('../models/comments.model');


const createComment = async(data)=>{
      let comment = new Comment({
        post : data.post,
        commentaireCible : data.commentaireCible,
        commenttaireParent : data.commenttaireParent,
        text : data.text,
        like: data.like
      });

      await comment.save();
}

const editComment = async(id,data)=>{
    const objet = {
                    text : data.text,
                    dateModif : Date.now()
             }
                await Comment.findByIdAndUpdate(id,{$set:objet});
}

const getComment = async(data)=>{
    const result=await Comment.find({post:data})
    return result;
}

const removeComment = async(id)=>{
    await Comment.findByIdAndDelete(id)
}

module.exports = {createComment,editComment,removeComment,getComment}