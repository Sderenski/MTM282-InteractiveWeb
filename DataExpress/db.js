const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function() {
    mongoose.connect(process.env.DBPATH)
    .then((result) => {
        return result;
    })
    .catch((err) => {
        console.log("Error connecting to the db: ", err);
    });

    mongoose.connection.on('connected', () =>{
        console.log('Connected to the database.')
    });

    mongoose.connection.on('error', () => {
        console.log('That did not work as planned...')
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(true, () => {
            console.log("Forcing db connection to cluster");
            process.exit(0);
        })
    })
}