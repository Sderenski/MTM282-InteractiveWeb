// Example Book Schema 
const miLibro = {
    title: "The Phoenix Project",
    author: "Gene Kim",
    published: 2013,
    publisher: "IT Revolution"
};

// Creating the schema to import into the mongoDB
const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
        },
        author: {
            type: String,
            unique: false,
            required: true,
        },
        published: {
            type: Number,
            unique: false,
            required: true,
        },
        publisher: {
            type: String,
            unique: false,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = libroSchema;