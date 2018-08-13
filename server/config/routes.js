const controller = require('../controllers/controllers.js');

const router = require('express').Router();

module.exports = router
    .post('/login', controller.login)
    .post('/dev', controller.createOneDev)
    .post('/job', controller.createOneJob)
    .post('/org', controller.createOneOrg)
    .get('/dev', controller.getAllDevs)
    .get('/job', controller.getAllJobs)
    .get('/org', controller.getAllOrgs)
    .get('/dev/:id', controller.getOneDev)
    .get('/dev/job/:id', controller.getOneJob)
    .get('/dev/org/:id', controller.getOneOrg)
;