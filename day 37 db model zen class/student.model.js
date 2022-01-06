const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    batch: {
        type: mongoose.Schema.ObjectId
    },
    tasksSubmitted: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Task"
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema, "students");