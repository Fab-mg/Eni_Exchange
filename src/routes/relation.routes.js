const {addDemandeRelation,addRelation,deleteDemandeRelation,deleteRelation,blockage} = require('../controllers/relation.controller')
const express = require('express')
const relationRouter = express.Router()

relationRouter.post('/create',addRelation)
relationRouter.post('/demande',addDemandeRelation)
relationRouter.delete('/retiring/:id',deleteDemandeRelation)
relationRouter.delete('/remove/:id',deleteRelation)
relationRouter.put('/blockage/:id',blockage)

module.exports = relationRouter

