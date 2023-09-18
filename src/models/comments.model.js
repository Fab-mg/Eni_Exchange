const mongoose = require('mongoose')


const comment = new mongoose.Schema({
    IdComment: mongoose.Types.ObjectId,
    post: 
    {
        type:String,
        required:true
    },
    commentaireCible: String,
    commenttaireParent : String,
    text : 
    {
        type:String,
        required :true,

    },
    like: [
        {
            type:String,
            required:true  
    
        }
    ],
    dateCreation : {
        type:Date,
        default:Date.now
    },

    dateModif:{
        type:Date,
        
    }
    
})

module.exports = mongoose.model('Comment',comment);