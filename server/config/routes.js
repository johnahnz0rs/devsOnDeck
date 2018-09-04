const controller = require('../controllers/controllers.js');

const router = require('express').Router();
// const express = require('express');
// const router = express.Router();

module.exports = router
  .post('/login', controller.login)
  .post('/jobs', controller.createOneJob)
  .post('/users', controller.createOneUser)
  .get('/jobs', controller.getAllJobs)
  .get('/devs', controller.getAllDevs)
  .get('/orgs', controller.getAllOrgs)
  .get('/jobsbyorg/:id', controller.getJobsByOrg)
  .get('/jobs/:id', controller.getOneJob)
  .get('/users/:id', controller.getOneUser)
  .put('/jobs/:id', controller.updateOneJob)
  .put('/users/:id', controller.updateOneUser)
  .delete('/jobs/:id', controller.deleteOneJob)
  .delete('/users/:id', controller.deleteOneUser)
;