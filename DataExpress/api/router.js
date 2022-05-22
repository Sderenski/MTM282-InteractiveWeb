const express = require('express');
// This module exports an express router
// .. this router wil probably be called/used

// This function expects a Mongoose model to be passed in as the argument
module.exports = function(Model) {
    const router = express.Router();

    // Allows for uppercase model names
    const modelKey = Model.modelName.toLowerCase();

    // Calling the controller module and passing the same argument to it. 'Model'
    const controller = require('./controller');
    const ctrl = controller(Model);

    // TODO Going to have to edit these maybe depending on how the json gets layed out...
    // Using the ctrl functions to assign the logic to the routes
    router.get(`/api/${modelKey}`, ctrl.readAll);
    router.get(`/api/${modelKey}/:id`, ctrl.readById);
    router.post(`/api/${modelKey}`, ctrl.create);
    router.delete(`/api/${modelKey}/:id`, ctrl.delete);
    router.patch(`/api/${modelKey}/:id`, ctrl.update);

    return router;
}