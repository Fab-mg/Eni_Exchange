const {addDemandeRelation,addRelation,deleteDemandeRelation,deleteRelation,blockage} = require('../controllers/relation.controller')
const express = require('express')
const relationRouter = express.Router()

relationRouter.post('/create',addRelation)
relationRouter.post('/demande',addDemandeRelation)
relationRouter.delete('/retiring',deleteDemandeRelation)
relationRouter.delete('/remove',deleteRelation)
relationRouter.put('/blockage',blockage)

module.exports = relationRouter

