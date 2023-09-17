const Comment = require('../models/comments.model');


const createComment = async(data)=>{
      let comment = new Comment({
        post : data.post,
        commentaireCible : data.commentaireCible,
        commenttaireParent : data.commenttaireParent,
        text : data.text,
        dateModif : "null"
      });

      await comment.save();
}

const editComment = async(id,data)=>{
    let objet = {
                    text : data.text,
                    dateModif : Date.now
             };
                await Comment.findByIdAndUpdate(id,{$set:objet});
}

const getComment = async(data)=>{
    await Comment.find({post:data})
}

const removeComment = async(id)=>{
    await Comment.findByIdAndDelete(id)
}

module.exports = {createComment,editComment,removeComment,getComment}