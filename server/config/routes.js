const controller = require('../controllers/controllers.js');

const router = require('express').Router();

module.exports = router
    .post('/loginTemp', controller.loginUser)
    .post('/login', controller.login)
    .post('/dev', controller.createOneDev)
    .post('/job', controller.createOneJob)
    .post('/org', controller.createOneOrg)
    .get('/dev', controller.getAllDevs)
    .get('/dev/:id', controller.getOneDev)
;