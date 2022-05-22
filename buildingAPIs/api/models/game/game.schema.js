// example of what a game might look like as a JS object

const myGame = {
    title: "Final Fantasy",
    developer: "Square",
    platform: ["Nintendo Entertainment System"],
    year: 1990,

}

// Converting into a MongoDB Model for the DB
const mongoose = require('mongoose');

// Just properities when using schema
// Can make somewhat relational
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        required: true,
    },
    developer: {
        type: String,
        unique: false,
        required: true,
    },
    platform: {
        type: String,
        unique: false,
        required: true,
    },
    year: {
        type: Number,
        unique: false,
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = gameSchema;