const { date } = require('joi');
const Post = require('../models/posts.model');

const createPost = async(data)=>{
  let post = new Post({
        type:data.type,
        titre: data.titre,
        resumE: data.resumE,
        text: data.text,
        cible: data.cible,
        autheur: data.autheur,
        photo : data.photo,
        video : data.video,
        status : data.status,
        participant : data.participant,
        like : data.like,
        commentaire : "null",
        signalE : data.signalE
    });
   return await post.save();
}


const getPost = async()=>{
  const post  = await Post.find({});
  return post;
}

const updatePost = async(id,data)=>{
    const objet = {
        type:data.type,
        titre: data.titre,
        resumE: data.resumE,
        text: data.text,
        cible: data.cible,
        autheur: data.autheur,
        photo : data.photo,
        video : data.video,
        dateModif: Date.now(),
        status : data.status,
        participant : data.participant,
        like : data.like,
        signalE : data.signalE
    }
     await Post.findByIdAndUpdate(id,{$set:objet})
}

const deletePost = async(id)=>{
    await Post.findByIdAndDelete(id)
}

module.exports = {createPost,updatePost,getPost,deletePost}