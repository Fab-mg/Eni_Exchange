const mongoose = require('mongoose')

const Post = new mongoose.Schema({
     IdPost : {
        type:mongoose.Types.ObjectId,
       
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
        
    },
    dateSuppr : {
        type:Date,
        required:false,
        
    },
    status:{
        type:String , 
        required:true,
        enum:['créé','publié']
    },
    participant:[{
            type:String ,
            required : true
        }
    ],
    like : [{
        type: String
      
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
