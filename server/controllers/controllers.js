const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Job = mongoose.model("Job");
const User = mongoose.model("User");

module.exports = {

  login: function(request, response) {
    console.log('*** controller is running login(login) ***', request.body);
    User.findOne({email: request.body.email}, function(error, user) {
      if (error) {
        console.log('*** ERR controller.testLogin 1 ***', error);
        response.json(error);
      } else if (user) {
        bcrypt.compare(request.body.pw, user.pw, function(error, correct) {
          if (error) {
            console.log('*** error in testLogin.bcrypt() ***', error);
          } else if (correct) {
            console.log('*** the password was correct, my bro w2g! ***', user);
            response.json(user);
          } else if (!correct) {
            console.log('*** sorry bro ur pw is WRONG ***');
            response.json({error: 'incorrect pw'});
          }
        });
      } else {
        console.log('*** controller.testLogin: no such user exists ***');
        response.json({error: "no such user exists"});
      }
    });
  },




  // **************
  // *** CREATE ***
  // **************


  createOneJob: function(request, response) {
    console.log("*** controller.createOneJob() ***");
    Job.create(request.body, function(error) {
      if (error) {
        console.log('*** error in creating new job doc ***', error);
        response.json(error);
      }
      console.log('*** new job doc created successfully ***');
      response.json();
    });
  },

  createOneUser: function(request, response) {
    console.log('*** starting createOneUser(user) ***', request.body);

    User.findOne({email: request.body.email}, function(error, user) {
      if (error) {
        console.log('*** error in User.findOne() ***', error);
        response.json(error);
      } else if (user) {
        console.log('*** error: this account already exists ***');
        response.json({error: 'this account already exists'});
      }
    });

    let newUser = request.body;

    bcrypt.hash(request.body.pw, 10, function(error, hash) {
      if (error) {
        console.log('*** error in bcrypt ***', error);
      } else if (hash) {
        newUser.pw = hash;
        User.create(newUser, function(error, res) {
          if (error) {
            console.log('*** error in User.create() ***', error);
            response.json(error);
          } else if (res) {
            console.log('*** User.create() received this ***', res);
            response.json(res);
          }
        });
      }
    });

  },





  // ************
  // *** READ ***
  // ************


  getAllJobs: function(request, response) {
    console.log("*** getting all jobs ***");
    Job.find({}, function(error, jobs) {
      if (error) {
        console.log("*** ERROR in getAllJobs mongo ***", error);
        response.json(error);
      } else if (jobs) {
        console.log("*** these are all jeobs ***", jobs);
        response.json(jobs);
      } else if (!jobs) {
        console.log("*** no jobs, mang ***");
        response.json({error: 'no jobs'});
      }
    });
  },

  getAllDevs: function(request, response) {
    console.log('*** getting all devs ***');
    User.find({accountType: "dev"}, function(error, devs) {
      if (error) {
        console.log("*** ERROR in getAllDevs mongo ***", error);
        response.json(error);
      } else if (devs) {
        console.log("*** these are all devs ***", devs);
        response.json(devs);
      } else {
        console.log("*** no devs, mang ***");
        response.json({error: 'no devs'});
      }
    });
  },

  getAllOrgs: function(request, response) {
    User.find({accountType: "org"}, function(error, orgs) {
      if (error) {
        console.log("*** ERROR in getAllOrgs mongo ***", error);
        response.json(error);
      } else if (orgs) {
        console.log("*** these are all orgs ***", orgs);
        response.json(orgs);
      } else if(!orgs) {
        console.log("*** no orgs, mang ***");
        response.json({error: 'no orgs'});
      }
    });
  },

  getJobsByOrg: function(request, response) {
    console.log('*** getJobsByOrgs(id) ***', request.params.id);
    Job.find({orgId: request.params.id}, function(error, jobs) {
      if (error) {
        console.log('*** error in getJobsByOrgs 1 ***', error);
        response.json(error);
      } else if (jobs) {
        console.log('*** hooray, we found our jrrrbs!!! ***', jobs);
        response.json(jobs);
      } else if (!jobs) {
        console.log('*** no jobs??? ***');
        response.json({error: 'no jeobs by this org'});
      }
    });
  },

  getOneJob: function(request, response) {
    // code
    console.log(
      "*** controller.getOneJob(), request.body = ***",
      request.body
    );
    Job.findOne({_id: request.params.id}, function(error, org) {
      if (error) {
        console.log('*** error in controller.getOneJob ***', error);
        response.json(error);
      } else if (org) {
        console.log(org);
        response.json(org);
      }
    });
  },

  getOneUser: function(request, response) {
    console.log('*** controller is getting one user(id)', request.params.id);

    User.findOne({_id: request.params.id}, function(error, user) {
      if (error) {
        console.log('*** error in getOneUser() ***', error);
        response.json(error);
      } else if (user) {
        console.log('*** found One User ***', user);
        response.json(user);
      } else if (!user) {
        console.log('*** no such user found ***');
        response.json({error: 'no such user found'});
      }
    });
  },





  // **************
  // *** UPDATE ***
  // **************


  updateOneJob: function(request, response) {
    // code
  },

  updateOneUser: function(request, response) {
    //code
  },




  // **************
  // *** DELETE ***
  // **************


  deleteOneJob: function(request, response) {
    // code
  },

  deleteOneUser: function(request, response) {
    //
  }

};
