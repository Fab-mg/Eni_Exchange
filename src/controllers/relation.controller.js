
const {
    createDemandeRelation,
    createRelation,
    removeDemandeRelation,
    removeRelation,
    blockE
} = require('../services/relation.service');

const addRelation = async(req,res)=>{
    try{
        let data = req.body
       await createRelation(data)
        .then(()=>{
            res.status(400).json("Relation créée") 
        })
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

const deleteRelation = async(req,res)=>{
          let id = req.params.id
           await removeRelation(id)
          .then(() => {
            res.status(200).json("Deleted")
          })
          .catch((err) => {
            console.log(`Erreur:${err}`)
            res.status(400).json(err)
           })
}

const addDemandeRelation = async(req,res)=>{
    try{
         let data = req.body
         await createDemandeRelation(data)
         .then(()=>{
            res.status(200).json('Demande envoyée')
         })
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

const deleteDemandeRelation = async(req,res)=>{
    try{
            let id = req.params.id
            await removeDemandeRelation(id)
            .then(()=>{
                res.status(200).json('Demande annulée')
            })
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

const blockage = async(req,res)=>{
    try{
         let id = req.params.id
         await blockE(id)
         .then(()=>{
            res.status(200).json('Bloqué')
         })
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

module.exports = {addRelation,deleteRelation,blockage,addDemandeRelation,deleteDemandeRelation}