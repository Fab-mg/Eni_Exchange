
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
        dateCreation : data.dateCreation,
        dateModif: "null",
        dateSuppr:"null",
        status : data.status,
        participant : data.participant,
        like : data.like,
        commentaire : "null",
        signalE : data.signalE
    });
   await post.save();
}


const getPost = async()=>{
  let post  = await Post.find({});
  return post;
}

const updatePost = async(id,data)=>{
    let objet = {
        type:data.type,
        titre: data.titre,
        resumE: data.resumE,
        text: data.text,
        cible: data.cible,
        autheur: data.autheur,
        photo : data.photo,
        video : data.video,
        dateCreation : data.dateCreation,
        dateModif: data.dateModif,
        status : data.status,
        participant : data.participant,
        like : data.like,
        signalE : data.signalE
    }
     await Post.findByIdAndUpdate(id,{$set: objet})
}

const deletePost = async(id)=>{
    let res=await Post.findByIdAndUpdate(id,{$set:{dateSuppr:Date.now }})
    res.then(()=>{
        Post.findByIdAndDelete(id)
    })
}

module.exports = {createPost,updatePost,getPost,deletePost}