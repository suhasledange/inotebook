import { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import styled from 'styled-components';
import NoteItem from './NoteItem';
function About() {
  const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <NoteBlock>

<div className='Container my-3'>
        <h1>Add a Note</h1>
        <form className="my-3">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        
        
        
      <h1>Your Note</h1>

      <div className='Container'>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
      })}

      </div>

      </div> 

    </NoteBlock>
  )
}

export default About


const NoteBlock = styled.div`
  padding-top: 10rem;
  height: 100vh;
`;  