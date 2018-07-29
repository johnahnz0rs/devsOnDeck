const controller = require('../controllers/controllers.js');

const router = require('express').Router();

module.exports = router
    .post('/dev', controller.createOneDev)
    .post('/job', controller.createOneJob)
    .post('/org', controller.createOneOrg)

    // .get('/pets', petController.getAllPets)
    // .post('/pets', petController.addNewPet)
    // .get('/pets/:id', petController.getOnePet)
    // .put('/pets/:id', petController.updateOnePet)
    // .delete('/pets/:id', petController.deleteOnePet);
;