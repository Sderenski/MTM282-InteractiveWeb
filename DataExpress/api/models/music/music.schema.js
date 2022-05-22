// Creating an example of what a music object will look like

const myMusica = {
    title: "You & Me",
    artist: "Marc E. Bassy",
    album: "Gossip Columns",
    genres: ['R&B/Soul', 'Pop', 'hip-Hop/Rap', 'Christian'],
    year: 2016
};

// Converting into a mongoDB Model for the DB
const mongoose = require('mongoose');

const musicaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: false,
            required: true,
        }, 
        artist: {
            type: String,
            unique: false,
            required: true,
        },
        album: {
            type: String,
            unique: false,
            required: true,
        },
        genres: {
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
    });

module.exports = musicaSchema;