const mongoose = require('mongoose');

const relationSchema = new mongoose.Schema({

            IdRelation : mongoose.Types.ObjectId,

            cible : {
                type: String, 
                required : true 
            },
            type: {
                type : String,
                enum:['amis','blockE']
            },
            autheur:{
                type:String,
                required:true
            },
            dateCreation : {
                type:Date,
                default:Date.now

            }
});

const demandeRelationSchema = new mongoose.Schema({

    IddemandeRelation : mongoose.Types.ObjectId,

    cible : {
        type: String, 
        required : true 
    },
    type: {
        type : String,
        enum:['amis','bloquE']
    },
    autheur:{
        type:String,
        required:true
    },
    dateCreation : {
        type:Date,
        required:true,
        default:Date.now

    }
});


const relationModel = mongoose.model('Relation',relationSchema);
const demandeRelationModel= mongoose.model('demandeRelation',demandeRelationSchema);

module.exports = {relationModel,demandeRelationModel}
