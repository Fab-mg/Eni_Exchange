
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
        let result=await createRelation(data)
        console.log('Resultat:'+result)
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

const deleteRelation = async(req,res)=>{
          let id = req.params.id
          let result = await removeRelation(id)
          result.then(() => {
            res.status(200).json(result)
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
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

const deleteDemandeRelation = async(req,res)=>{
    try{
            let id = req.params.id
            await removeDemandeRelation(id)
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}


const blockage = async(req,res)=>{
    try{
         let id = req.params.id
         await blockE(id)
    }catch(err){
        console.log(`Erreur:${err}`)
        res.status(400).json(err)
    }
}

module.exports = {addRelation,deleteRelation,blockage,addDemandeRelation,deleteDemandeRelation}