const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    description:{
        type:String,
        default:"None"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Notes = mongoose.model("notes",NotesSchema);
Notes.createIndexes();
module.exports = Notes;