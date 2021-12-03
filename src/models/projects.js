const mongoose = require("mongoose");

const projSch = new mongoose.Schema({

    nameProyect:{
        type: String,
        required: true,
        unique: true
    },
    generalGoals:{
        type: [String],
        required: true,
    },
    specificGoals: [String],

    budget:{
        type: Number,
        required: true
    },
    startingDate:{
        type: String,
        required: true
    },
    deadline :{
        type: String,
        required: true
    },
    idLeader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nameLeader: {
        type: String,
        ref: 'User',
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    stage:{
        type: String,
        required: true
    }
})

const x = mongoose.model("Project", projSch );
module.exports = x;
