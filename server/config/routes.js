const controller = require('../controllers/controllers.js');

const router = require('express').Router();

module.exports = router
    .post('/loginDev', controller.loginDev)
    .post('/loginOrg', controller.loginOrg)
    .post('/dev', controller.createOneDev)
    .post('/job', controller.createOneJob)
    .post('org', controller.createOneOrg)
    .get('/dev/:id', controller.getOneDev)
    .get('/dev/job/:id', controller.getOneJob)
    .get('/dev/org/:id', controller.getOneOrg)
    .get('/devs', controller.getAllDevs)
    .get('/jobs', controller.getAllJobs)
    .get('/orgs', controller.getAllOrgs)
;