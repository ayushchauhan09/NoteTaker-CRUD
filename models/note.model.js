const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    }
});

const Notes = mongoose.model('Notes',notesSchema);

module.exports = Notes;