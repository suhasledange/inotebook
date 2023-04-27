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
      // console.log(json)
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
    const note = await response.json();
    // console.log("Note Adding")
    setNotes(notes.concat(note));
  }

  //Delete a Note
  const deleteNote =  async (id) => {
   
    if (window.confirm("Confirm to delete a Note") === true) {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
        },
      });
      const json = response.json();
  
      // console.log("deleteing id is", id);
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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZGE1OTcyMTIyMGQ3ZWI2MmNkZDhhIn0sImlhdCI6MTY3ODcwNTUzMX0.z6247UGa5xpojy3PdxW5pLR0z7BqzdUU3gdeJxF7Y0w'
      },
      body: JSON.stringify({title,description,tag})
    });
    // const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    //edit
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;