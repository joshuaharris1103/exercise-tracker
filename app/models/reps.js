const mongoose = require('mongoose')

const repsSchema = new mongoose.Schema({
    repetitions: {
        type: Number,
        required
    },
    program: {
        type: String,
        enum: ['strength', 'hypertrophy', 'endurance'],
        default: 'new'
    }
}, { timestamps: true })

module.exports = repsSchema