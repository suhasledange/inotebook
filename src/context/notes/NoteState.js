import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  let host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

    //get all Notes
    const getNotes = async (title, description, tag) => {

      //api call
  
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
        },
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }
  




  //Add a Note
  const addNote = async (title, description, tag="personal") => {

    //api call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
      },
      body: JSON.stringify({title,description,tag})
    });

    console.log("Note Adding")
    const note = {
      "_id": "6410b1696295018a62ebcc7f",
      "user": "640da59721220d7eb62cdd8a",
      "title": title,
      "tag": tag,
      "description": description,
      "date": "2023-03-14T17:39:53.239Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote =  async (id) => {
   
    if (window.confirm("Confirm to delete a Note") == true) {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
        },
      });
      const json = response.json();
      console.log(json);
  
      console.log("deleteing id is", id);
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    } else {
      return;
    }
    //api call

    
  }
  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    //api call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    //edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;