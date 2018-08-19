const mongoose = require("mongoose");
// const bcrypt = require('bcrypt-as-promised');
const bcrypt = require("bcrypt");
const Dev = mongoose.model("Dev");
const Org = mongoose.model("Org");
const Job = mongoose.model("Job");

module.exports = {
  login: function(request, response) {
    console.log("***** controller.login() *****", request.body);

    // wrapper to check if email and pw were entered
    // they should be because both are required to submit login request;
    if (request.body.email && request.body.pw) {
      // first check if the user is a dev
      Dev.findOne({ email: request.body.email }, function(error, dev) {
        if (error) {
          console.log("***** error in dev.findOne *****");
          response.json(error);
        } else if (dev) {
          // if a dev with that email is found, then check pw:
          console.log(
            "***** dev account with that email exists, checking password now *****"
          );
          bcrypt.compare(request.body.pw, dev.pw, function(error, result) {
            if (error) {
              console.log(
                "***** error in controller.login => compare dev's pw *****",
                error
              );
              response.json(error);
            } else if (result) {
              console.log("***** pw match for this dev-user *****", dev);
              response.json(dev);
            } else if (!result) {
              console.log("***** incorrect pw *****");
              response.json("{error: 'incorrect password for dev'}");
            }
          });
        } else if (!dev) {
          console.log(
            "***** no dev account with that email was found, checking for org accounts now *****"
          );

          // if no dev with that email is found, check for org;
          Org.findOne({ email: request.body.email }, function(error, org) {
            if (error) {
              console.log("***** error in org.findOne *****");
              response.json(error);
            } else if (org) {
              // if an org with that email is found, then check pw;
              console.log(
                "***** org account with that email exists, checking password now *****"
              );
              bcrypt.compare(request.body.pw, org.pw, function(error, result) {
                if (error) {
                  console.log(
                    "***** error in controller.login => compare org's pw *****",
                    error
                  );
                  response.json(error);
                } else if (result) {
                  console.log("***** pw match for this org-user *****", org);
                  response.json(org);
                } else if (!result) {
                  console.log("***** incorrect pw *****");
                  response.json("{error: 'incorrect password for org'}");
                }
              });
            } else if (!org) {
              console.log(
                "***** no org account with that email was found *****"
              );
              response.json();
            }
          });
        }
      });
    } // end if(email && pw);
  },

  // ******************
  // ***** CREATE *****
  // ******************

  createOneDev: function(request, response) {
    console.log("***** controller.createOneDev() *****");

    // is this email already registered
    Dev.findOne({ email: request.body.email }, function(error, dev) {
      // if-not-registered as err handling
      if (error) {
        console.log(
          "***** error in controller.createOneDev=>dev.findOne(email) *****",
          error
        );
        response.json(error);
      } else if (dev) {
        console.log("***** a dev account with this email already exists *****");
        response.json();
      }
    });

    let newDev = request.body;
    console.log(
      "***** controller.createOneDev - this is the newDev that is to be created, sans pw *****",
      newDev
    );

    // encrypting the password
    bcrypt.hash(request.body.pw, 10, function(error, hash) {
      if (error) {
        console.log(error);
        response.json(error);
      } else {
        newDev.pw = hash;
        console.log(
          "***** controller.createOneDev - this is the newDev WITH hashed pw *****",
          newDev
        );

        // create new Dev document with hashed pw;
        Dev.create(newDev, function(error) {
          if (error) {
            console.log("***** error in creating new dev doc *****", error);
            response.json(error);
          }
          console.log("***** new dev doc created successfully *****");
          response.json();
        });
      }
    });
  },

  createOneJob: function(request, response) {
    console.log("***** controller.createOneJob() *****");
    Job.create(request.body, function(error) {
      if (error) {
        console.log('***** error in creating new job doc *****', error);
        response.json(error);
      }
      console.log('***** new job doc created successfully *****');
      response.json();
    });
  },

  createOneOrg: function(request, response) {
    console.log("***** controller.createOneOrg() *****");

    // is this email already registered
    Org.findOne({ email: request.body.email }, function(error, org) {
      if (error) {
        console.log(
          "***** error in controller.createOneOrg => org.findOne(email) *****",
          error
        );
        response.json(error);
      } else if (org) {
        console.log(
          "***** an org account with this email already exists *****"
        );
        response.json();
      }
    });

    let newOrg = request.body;
    console.log(
      "***** controller.createOneOrg -- this is the newOrg that is to be created, sans pw",
      newOrg
    );

    // encrypting the password
    bcrypt.hash(request.body.pw, 10, function(error, hash) {
      if (error) {
        console.log(error);
        response.json(error);
      } else {
        newOrg.pw = hash;
        console.log(
          "***** controller.createOneOrg -- this is the newOrg WITH hashed pw *****",
          newOrg
        );

        // create new Org document with hashed pw;
        Org.create(newOrg, function(error) {
          if (error) {
            console.log("***** error in created new org doc *****", error);
            response.json(error);
          }
          console.log("***** new org doc created successfully *****");
          response.json();
        });
      }
    });
  },

  // ****************
  // ***** READ *****
  // ****************

  getAllDevs: function(request, response) {
    // code
    console.log("***** controller.getAllDevs *****");
    Dev.find({}, function(error, devs) {
      if (error) {
        console.log("***** ERROR in controller.Dev.find() *****", error);
        response.json(error);
      } else if (devs.length === 0) {
        console.log("***** no devs, mang *****");
        response.json();
      } else {
        console.log("***** these are all devs *****", devs);
        response.json(devs);
      }
    });
  },

  getAllJobs: function(request, response) {
    // code
    console.log("***** controller.getAllJobs *****");
    Job.find({}, function(error, jobs) {
      if (error) {
        console.log("***** ERROR in getAllJobs mongo *****", error);
        response.json(error);
      } else if (jobs.length === 0) {
        console.log("***** no jobs, mang *****");
        response.json();
      } else {
        console.log("***** these are all jeobs *****", jobs);
        response.json(jobs);
      }
    });
  },

  getAllOrgs: function(request, response) {
    // code
    console.log("***** controller.getAllOrgs *****");
    Org.find({}, function(error, orgs) {
      if (error) {
        console.log("***** ERROR in getAllOrgs mongo *****", error);
        response.json(error);
      } else if (orgs.length === 0) {
        console.log("***** no orgs, mang *****");
        response.json();
      } else {
        console.log("***** these are all orgs *****", orgs);
        response.json(orgs);
      }
    });
  },

  getOneDev: function(request, response) {
    // code

    console.log("***** controller.getOneDev(id) *****", request.params.id);
    Dev.findOne({ _id: request.params.id }, function(error, dev) {
      if (error) {
        console.log("***** ERROR in controller.getOneDev mongo *****", error);
        response.json(error);
      } else if (dev) {
        console.log(dev);
        response.json(dev);
      }
    });
  },

  getOneJob: function(request, response) {
    // code
    console.log(
      "***** controller.getOneJob(), request.body = *****",
      request.body
    );
  },

  getOneOrg: function(request, response) {
    // code
    console.log(
      "***** controller.getOneOrg(), request.body *****",
      request.body
    );
  },

  // ******************
  // ***** UPDATE *****
  // ******************

  editOneDev: function(request, response) {
    // code
    console.log("***** controller.editOneDev() *****");
  },

  editOneJob: function(request, response) {
    // code
    console.log("*****  *****");
  },

  editOneOrg: function(request, response) {
    // code
    console.log("*****  *****");
  },

  // ******************
  // ***** DELETE *****
  // ******************

  deleteOneDev: function(request, response) {
    // code
    console.log("*****  *****");
  },

  deleteOneJob: function(request, response) {
    // code
    console.log("*****  *****");
  },

  deleteOneOrg: function(request, response) {
    // code
    console.log("*****  *****");
  }

  // getAllPets: function(request, response) {
  //     Pet.find({}, function(error, pets) {
  //         if (error) {
  //             console.log('***** petController error *****', error);
  //             response.json(error);
  //         } else {
  //             if (pets.length > 0) {
  //                 // if there was no error AND there are pets in db;
  //                 console.log('***** petController found', pets.length, 'pets in db *****');
  //                 response.json(pets);
  //
  //             } else {
  //                 // if there was no error AND there are no pets in db;
  //                 const mongoQuery = [
  //                     {
  //                         name: 'Jasmine',
  //                         type: 'dog',
  //                         description: 'tiny fur ball shih tzu',
  //                         skill1: 'yapping',
  //                         skill2: 'begging',
  //                         skill3: 'being ky00t',
  //                         likes: 12
  //                     },
  //                     {
  //                         name: 'Kitty NO!',
  //                         type: 'cat',
  //                         description: 'badass indoor/outdoor cat',
  //                         skill1: 'bossing you around',
  //                         skill2: 'survival' + ' skillz',
  //                         skill3: 'killing mice',
  //                         likes: 42
  //                     },
  //                     {
  //                         name: 'Bobby',
  //                         type: 'dog',
  //                         description: 'lovable dummy pitbull',
  //                         skill1: 'sleeping',
  //                         skill2: 'begging for food',
  //                         skill3: 'loving u',
  //                         likes: 3128342
  //                     },
  //                     {
  //                         name: 'Spaghetti',
  //                         type: 'hamster',
  //                         description:
  //                             'i was gonna name him The Enforcer, but he wanted his name to be Spaghetti',
  //                         skill1: 'poopin',
  //                         skill2: 'hamster wheel',
  //                         skill3: 'sleeping',
  //                         likes: 15
  //                     }
  //                 ];
  //
  //                 Pet.insertMany(mongoQuery, function(error) {
  //                     if (error) {
  //                         console.log('***** petController addInitialData error *****', error);
  //                         response.json(error);
  //                     } else {
  //                         Pet.find({}, function(error2, pets2) {
  //                             if (error2) {
  //                                 console.log('***** petController error when finding pets after addInitialData *****', error);
  //                                 response.json(error2);
  //                             } else {
  //                                 response.json(pets2);
  //                             }
  //                         });
  //                     }
  //                 });
  //             }
  //
  //
  //         }
  //     })
  // },
  //
  //
  // // .post('/pets', petController.addNewPet)
  // addNewPet: function(request, response) {
  //     console.log('***** this is what the user submitted *****', request.body);
  //
  //     Pet.create(request.body, function(error) {
  //         if (error) {
  //             console.log('***** petController addNewPet() error', error);
  //             response.json(error);
  //         } else {
  //             console.log('****** petController pet added *****');
  //             response.json();
  //         }
  //     });
  // },
  //
  //
  // // .get('/pets/:id', petController.getOnePet)
  // getOnePet: function(request, response) {
  //     Pet.findOne({_id: request.params.id}, function(error, pet) {
  //         if (error) {
  //             console.log('****** petController getOnePet() error *****', error);
  //             response.json(error);
  //         } else {
  //             console.log('***** found the pet *****');
  //             response.json(pet);
  //         }
  //     });
  // },
  //
  // // .put('/pets/:id', petController.updateOnePet)
  // updateOnePet: function(request, response) {
  //     console.log('***** this is what the user submitted *****', request.body);
  //
  //     Pet.updateOne({_id: request.params.id}, request.body, function(error, pet) {
  //         if (error) {
  //             console.log('***** petController updateOnePet() error *****', error);
  //             response.json(error);
  //         } else {
  //             console.log('***** pet updated *****');
  //             response.json(pet);
  //         }
  //     });
  // },
  //
  // // .delete('/pets/:id', petController.deleteOnePet);
  // deleteOnePet: function(request, response) {
  //     Pet.deleteOne({_id: request.params.id}, function(error, result) {
  //         if (error) {
  //             console.log('***** petController deleteOnePet() error *****', error);
  //             response.json(error);
  //         } else{
  //             console.log('***** one pet deleted ******');
  //             response.json(result);
  //         }
  //     });
  // }
};
