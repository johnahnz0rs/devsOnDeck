const controller = require('../controllers/controllers.js');

const router = require('express').Router();

module.exports = router
    .post('/login', controller.loginUser)
    .post('/dev', controller.createOneDev)
    .post('/job', controller.createOneJob)
    .post('/org', controller.createOneOrg)
    .get('/dev', controller.getAllDevs)
;