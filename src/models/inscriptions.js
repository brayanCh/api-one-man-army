const mongoose = require("mongoose");

const insSch = new mongoose.Schema({

    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    isAccepted: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    exitDate : String
});

const x = mongoose.model("Inscriptions", insSch );
module.exports = x;
