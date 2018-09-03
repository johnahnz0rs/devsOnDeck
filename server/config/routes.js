const controller = require('../controllers/controllers.js');

const router = require('express').Router();
// const express = require('express');
// const router = express.Router();

module.exports = router
  .post('/login', controller.login)
  .post('/devs', controller.createOneDev)
  .post('/jobs', controller.createOneJob)
  .post('/orgs', controller.createOneOrg)
  .get('/devs/:id', controller.getOneDev)
  .get('/jobs/:id', controller.getOneJob)
  .get('/jobsbyorg/:id', controller.getJobsByOrg)
  .get('/orgs/:id', controller.getOneOrg)
  .get('/devs', controller.getAllDevs)
  .get('/jobs', controller.getAllJobs)
  .get('/orgs', controller.getAllOrgs)
;