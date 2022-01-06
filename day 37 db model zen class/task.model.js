const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    },
    submittedBy: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Student"
        }
    ],
    dueDate: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });
module.exports = mongoose.model("Task", taskSchema, "tasks");