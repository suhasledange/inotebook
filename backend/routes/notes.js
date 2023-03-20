const express = require("express");
const Router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Notes = require("../models/Notes")
const { body, validationResult } = require('express-validator');

//ROUTE 1 : Get all the notes using GET

Router.get("/fetchallnotes",
 fetchuser, async (req, res) => { 
    
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

})

//ROUTE 2 : Add a new note using POST

Router.post("/addnote", fetchuser, [
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('description', "Description must be atleast 4 character").isLength({ min: 5 }),
], async (req, res) => {

    try {
        // if there are errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, tag } = req.body;

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()
        res.send(saveNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

});


//ROUTE 3 : Updating  an existing Note using PUT

Router.put("/updatenote/:id", fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;

    try {
        
        // Create a newNote Object
    const newNote = {};
    if (title) { newNote.title = title; }
    if (description) { newNote.description = description; }
    if (tag) { newNote.tag = tag; }

    //Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not Found")
    }
    if (note.user.toString() != req.user.id) {
        return res.status(401).send("Not Allowed")
    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
    
});


//ROUTE 4 : Deleting Note Using DELETE

Router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;

    try {

           //Find the note to be deleted
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not Found")
    }

    //Allow deletion only if user owns it
    if (note.user.toString() != req.user.id) {
        return res.status(401).send("Not Allowed")
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Success" : "Note has been deleted", note:note});

        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }


});


module.exports = Router;