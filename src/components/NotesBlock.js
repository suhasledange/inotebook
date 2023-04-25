import React from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import styled from 'styled-components';

function NotesBlock() {
  const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <NotesBl>
       <div className='Container'>
      <h1>Your Notes</h1>
      <div className='Main_Notes'>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
      })}
      </div>

      </div>
    </NotesBl>
  )
}

export default NotesBlock

const NotesBl = styled.div`
  .Container{
        margin-top: 4rem;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 5rem;

        h1{
          font-size: 2rem;
          margin-bottom: 4rem;
        }
      .Main_Notes{
      display: flex;
      flex-wrap: wrap;
    }  
    }

`;