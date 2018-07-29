const mongoose = require('mongoose');
const Dev = mongoose.model('Dev');
const Org = mongoose.model('Org');
const Job = mongoose.model('Job');


module.exports = {

    // ******************
    // ***** CREATE *****
    // ******************

    createOneDev: function(request, response) {
        console.log('***** controller.createOneDev() *****');


        // if this email is already registered
        Dev.findOne({email: request.body.email}, function(error, dev) {
            // if-not-registered as err handling
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
            // if registered, then return a error msg to the template (reg form)
            } else {
                console.log('***** ERROR: user already exists *****');
                response.json(dev);
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

    login: function(request, response) {
        // code
        console.log('*****  *****');
    },


    getAllDevs: function(request, response) {
        // code
        console.log('*****  *****');
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
        console.log('*****  *****');
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
        console.log('*****  *****');
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