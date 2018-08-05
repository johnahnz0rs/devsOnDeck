const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const Dev = mongoose.model('Dev');
const Org = mongoose.model('Org');
const Job = mongoose.model('Job');



module.exports = {


    loginTemp: function(request, response) {
        // code
        console.log('***** controller.loginUser *****', request.body);
        Dev.findOne({email: request.body.email}, function(error, dev) {
            if (error) {
                console.log(error);
                response.json(error);
            } else if (dev) {
                console.log('***** controller.loginUser found one dev *****', dev);
                // improve this password check to bcrypt;
                if (dev.pw === request.body.pw) {
                    console.log('***** this is dev.pw ******', dev.pw);
                    console.log('***** this is dev.password *****', dev.password);
                    response.json(dev);
                } else {
                    console.log('***** ERROR: controller.loginUser incorrect password *****');
                    response.json();
                }
            } else if (!dev) {
                console.log('***** controller.loginUser: no such dev, searching for orgs *****');
                Org.findOne({email: request.body.email}, function(error, org) {
                    if (error) {
                        console.log(error);
                        response.json(error);
                    } else if (org) {
                        console.log('***** controller.loginUser found one org *****', org);
                        // improve this password check to bcrypt;
                        if (org.password === request.body.password) {
                            response.json(org);
                        } else {
                            console.log('****** ERROR: controller.loginUser incorrect password *****');
                            response.json();
                        }
                    } else if (!org) {
                        console.log('***** controller.loginUser: no such org either *****');
                        response.json();
                    }
                });
            }
        });
    },

    login: function(request, response) {
        console.log('***** controller.login() *****', request.body);

        if (request.body.email && request.body.pw) {

            // check for dev
            Dev.findOne({email: request.body.email}, function(error, dev) {
                if (error) {
                    console.log(error);
                    response.json(error);
                } else if (dev) {
                    if (bcrypt.compare(request.body.pw, dev.pw)) {
                        console.log('***** dev.pw ok *****');
                        response.json(dev);
                    } else {
                        console.log('***** dev.pw is incorrect ****');
                    }

                // if not a dev, check for org
                } else {
                    console.log('***** No such dev found; checking for orgs *****');
                    Org.findOne({email: request.body.email}, function(error, org) {
                        if (error) {
                            console.log(error);
                            response.json(error);
                        } else if (org) {
                            if (bcrypt.compare(request.body.pw, org.pw)) {
                                console.log('***** org.pw ok *****');
                                response.json(org);
                            }
                        } else {
                            console.log('***** no org found either ****');
                            response.json();
                        }
                    });
                }
            });
        }
    },



    updatePw: function(request, response) {
        console.log(request.body);
    },

    // ******************
    // ***** CREATE *****
    // ******************

    createOneDev: function(request, response) {
        console.log('***** controller.createOneDev() *****');

        // is this email already registered
        Dev.findOne({email: request.body.email}, function(error, dev) {
            // if-not-registered as err handling
            if (error) {
                console.log(error);
                response.json(error);
            }
            else if (dev) {
                console.log('***** this user already exists ****');
                // error msg to template?
                response.json('{error: "User already exists. Try logging in."}');
            } else if (!dev) {
                const newUser = request.body;

                // encrypt the password FIRST...BEFORE creating a new Dev document.
                bcrypt.hash(request.body.pw, 10)
                    .then(hashed_pw => {
                        newUser.pw = hashed_pw;
                        console.log('**** this is the hashed pw*****', newUser.pw);
                        console.log('***** controller -- testing the bcrypt hash *****', newUser);
                        Dev.create(newUser, function(error) {
                            if (error) {
                                console.log('***** createOneDev error *****', error);
                                response.json(error);
                            } else {
                                console.log('*****controller.createOneDev -- new user created successfully *****');
                                response.json();
                            }
                        });
                    });
            }
        });
    },



    createOneJob: function(request, response) {
        // code
        console.log('***** controller.createOneJob() *****');

        // create one job
        Job.create(request.body, function (error, job) {
            if (error) {
                console.log('***** ERROR: controller.createOneDev.Dev.create ******');
                response.json(error);
                // else return new dev object;
            } else {
                response.json(dev);
            }
        });
    },

    createOneOrg: function(request, response) {
        // code
        console.log('***** controller.createOneOrg() *****');

        // if this email is already registered
        Org.findOne({email: request.body.email}, function(error, dev) {
            // error: if email is not registered,
            if (error) {
                // then create mongo document
                Dev.create(request.body, function (error) {
                    if (error) {
                        console.log('***** ERROR: controller.createOneDev.Dev.create ******');
                        response.json(error);
                        // else return new dev object;
                    } else {
                        response.json(dev);
                    }
                });
                // else if email IS registered
            } else {
                // then return a error msg [to the template (reg form)](?)
                console.log('***** ERROR: user already exists *****');
                response.json(dev);
            }
        });
    },





    // ****************
    // ***** READ *****
    // ****************


    getAllDevs: function(request, response) {
        // code
        console.log('***** controller.getAllDevs *****');
        Dev.find({}, function(error, devs) {
            if (error) {
                console.log('***** ERROR in controller.Dev.find() *****', error);
            } else {
                console.log('***** all devs *****', devs);
                response.json(devs);
            }
        });
    },

    getAllJobs: function(request, response) {
        // code
        console.log('*****  *****');
    },

    getAllOrgs: function(request, response) {
        // code
        console.log('*****  *****');
    },

    getOneDev: function(request, response) {
        // code

        console.log('***** controller.getOneDev(id) *****', request.params.id);
        Dev.findOne({_id: request.params.id}, function(error, dev) {
           if (error) {
               console.log(error);
               response.json(error);
           } else if (dev) {
               console.log(dev);
               response.json(dev);
            }
        });

    },

    getOneJob: function(request, response) {
        // code
        console.log('*****  *****');
    },

    getOneOrg: function(request, response) {
        // code
        console.log('*****  *****');
    },



    // ******************
    // ***** UPDATE *****
    // ******************

    editOneDev: function(request, response) {
        // code
        console.log('***** controller.editOneDev() *****');
    },

    editOneJob: function(request, response) {
        // code
        console.log('*****  *****');
    },

    editOneOrg: function(request, response) {
        // code
        console.log('*****  *****');
    },





    // ******************
    // ***** DELETE *****
    // ******************

    deleteOneDev: function(request, response) {
        // code
        console.log('*****  *****');
    },

    deleteOneJob: function(request, response) {
        // code
        console.log('*****  *****');
    },

    deleteOneOrg: function(request, response) {
        // code
        console.log('*****  *****');
    },






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