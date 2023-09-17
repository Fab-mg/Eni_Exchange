const mongoose = require('mongoose')

const Post = new mongoose.Schema({
     IdPost : {
        type:mongoose.Types.ObjectId,
        required:true
    },
     type : {
        type: String , 
        enum : ['cours','post'],
        required:true
    },
     titre : {
        type :String , 
        required :true
    },
     resumE : {
        type :String ,
         required :false
        },
     text : {
        type :String ,
         required :true
        },
     cible : [{
        type : String,
        default:"null"
     }],
    autheur : {
         type: String,
         required:true,
         
        },
    photo : {
        type : String,
         required:false
        },
    video : {
        type :String,
         required:false
        },
    dateCreation : {
        type:Date,
        default :Date.now
    },
    dateModif : {
        type:Date,
        required:false,
        enum : ['null',Date.now]
    },
    dateSuppr : {
        type:Date,
        required:false,
        enum : ['null',Date.now]
    },
    status:{
        type:String , 
        required:true,
        enum:['créé','publié']
    },
    participant:[{
        userId : {
            type:String ,
            required : true
        }
    }],
    like : [{
        userId : String,
      
       }],
    commentaire :[{ 
        type : String,
    }],
    signalE:{
        type:Boolean ,
        default:false ,
       
        }  
})

module.exports = mongoose.model('Post',Post)
