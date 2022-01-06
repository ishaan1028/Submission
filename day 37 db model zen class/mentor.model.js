const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    skills: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    email: {
        type: String,
        required: true,
        trim: true
    },
    batches: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Batch"
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model("Mentor", mentorSchema, "mentors");