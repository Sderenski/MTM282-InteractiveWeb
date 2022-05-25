const mongoose = require('mongoose');
const schema = require('./music.schema');

schema.statics = {
    // Create an individual item in the document
    create: function(data, callback) {
        // 'this' refers to the schema
        console.log("Data for the create fxn : ", data);
        console.log("CallData for the create fxn : ", callback);
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

const model = mongoose.model('Music', schema);

module.exports = model;