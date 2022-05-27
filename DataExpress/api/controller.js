function handleErrors(res, err) {
    console.log("Got an error:", err);
    return res.status(400).send(err);
}

// export a single function that creates an OBJECT
// the only argument is a mongoose model
// Works with the router file to handle all the logic
// * If you keep basic and generic then you can use the same controller for the entire database
module.exports = function(Model) {
    return {
        create: (req, res, next) => {
            Model.create(req.body, function(err, results) {
                if(err){
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} created sucessfully`,
                    results,
                });
            });
        },
        update: (req, res, next) => {
            const query = {
                _id: req.params.id,
            };
            Model.update(query, req.body, function(err, results) {
                if(err){
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated sucessfully`,
                    results,
                });
            });

        },
        delete: (req, res, next) => {
            console.log("Got to the delete controller");
            const query = {
                _id: req.params.id,
            };
            Model.delete(query, req.body, function(err, results) {
                if(err){
                    handleErrors(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted sucessfully`,
                    results,
                });
            });
        },
        readAll: (req, res, next) => {
            Model.read({}, (err, result) => {
                if(err){
                    handleErrors(res, err);
                    return;
                }
                res.json(result);
            })
        },
        readById: (req, res, next) => {
            const query = {
                _id: req.params.id,
            }
            Model.read(query, (err, result) => {
                if(err) {
                    handleErrors(res, err);
                    return;
                }
                res.json(result);
            });
        },
    }
}