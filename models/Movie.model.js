const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
    {
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
    },
    {
    timestamps: true,
    }
);

const Movies = model("Movies", moviesSchema);

module.exports = Movies;