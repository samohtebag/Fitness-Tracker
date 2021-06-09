const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "What's the workout type?"
        },
        name: {
            type: String,
            trim: true,
            required: "What's your workout named?"
        },
        duration: {
            type: Number,
            required: "How many minutes was your workout?"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;