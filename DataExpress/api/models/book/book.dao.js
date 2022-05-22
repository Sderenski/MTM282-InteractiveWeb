const mongoose = require('mongoose');
const schema = require('./book.schema');

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

const model = mongoose.model('Book', schema);

module.exports = model;