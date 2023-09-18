const {relationModel,demandeRelationModel} = require('../models/relations.modele')

const createRelation = async(data)=>{
    const relation = new relationModel({
                cible : data.cible,
                type : "amis",
                autheur : data.autheur,
                
            
    })
    await relation.save()
}

const removeRelation = async(id)=>{
   await relationModel.findByIdAndDelete(id);
}

const createDemandeRelation = async(data)=>{
    const relation = new demandeRelationModel({
                cible : data.cible,
                type : "amis",
                autheur : data.autheur,
               
            
    })
    await relation.save()
}


const removeDemandeRelation = async(id)=>{
   await demandeRelationModel.findByIdAndDelete(id);
}
const blockE = async(id)=>{
    await relationModel.findByIdAndUpdate(id,{$set:{type:"bloquE"}})
}
module.exports = { createRelation, removeRelation,createDemandeRelation,removeDemandeRelation,blockE }