const mongoose = require('mongoose')


const comment = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
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
        enum:["null",Date.now]
    }
    
})

module.exports = mongoose.model('Comment',comment);