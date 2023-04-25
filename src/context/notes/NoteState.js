import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    
    const notesInitial = [
        {
          "_id": "640f0a496947a5cd8bd4f739",
          "user": "640da59721220d7eb62cdd8a",
          "title": "My title updated 1",
          "tag": "personal",
          "description": "please wake up early updated 1",
          "date": "2023-03-13T11:34:33.270Z",
          "__v": 0
        },
        {
          "_id": "6410b1696295018a62ebcc7f",
          "user": "640da59721220d7eb62cdd8a",
          "title": "added",
          "tag": "personalsd",
          "description": "please wake up early 1",
          "date": "2023-03-14T17:39:53.239Z",
          "__v": 0
        }
      ]

      const [notes,setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}                            
        </NoteContext.Provider>
    )
}

export default NoteState;