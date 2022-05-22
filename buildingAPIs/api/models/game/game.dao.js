const mongoose = require('mongoose');
const schema = require('./game.schema');

// Logic for Crud
// Shortcut when using mongoose
schema.statics = {
    // Create an individual item in the document
    create: function(data, callback) {
        // 'this' refers to the schema
        const document = new this(data);
        document.save(callback);
    },
    read: function(query, callback){
        this.find(query, callback);
    },
    update: function(query, data, callback){
        this.findOneAndUpdate(query, {$set: data}, callback);
    },
    delete: function(query, callback) {
        this.findOneAndDelete(query, callback);
    },
}

// Creating a model using the defined schema from above instead of doing it inline
// The first arg is the proper name of your collection
const model = mongoose.model('Game', schema);

module.exports = model;