const mongoose = require("mongoose");

const advSch = new mongoose.Schema({

    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Project"
    },
    date: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    observations : String
})

const x = mongoose.model("Advances", advSch );
module.exports = x;
