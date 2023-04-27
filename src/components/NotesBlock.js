import React, { useEffect ,useRef} from 'react'
import { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import styled from 'styled-components';

function NotesBlock() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const [note,setNote] = useState({title:"",description:"",tag:"Personal"})
  const ref = useRef(null);
  const updateNote = (note) => {
    ref.current.click();
  }

  useEffect(() => {
    getNotes()
  }, [])


  const submitNote = (e)=>{
    e.preventDefault();
      if(note.title==="" || note.description===""){
        alert("Enter Required Fields");
      }
}

const onChange = (e)=>{
  setNote({...note,[e.target.name]:e.target.value})
}

  return (
    <NotesBl>

<button style={{display:"none"}} ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
                <div className='form_input'>
                  <p>Enter Tag : </p>
                  <input type="text" id="utag" name="utag" placeholder='Enter Tag (Optional)' maxLength="10" onChange={onChange}/>
                </div>
                <div className='form_input'>
                  <p>Enter Title : </p>
                  <input type="text" id="utitle" name="utitle" placeholder='Enter Title' onChange={onChange} required />
                </div>
                <div className='form_input'>
                  <p>Enter Description : </p>
                  <textarea id="udescription" name="udescription" placeholder='Enter Description' onChange={onChange}></textarea>
                </div>
              </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>



      <div className='Container'>
        <h1>Your Notes</h1>
        <div className='Main_Notes'>
          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
          })}
        </div>

      </div>
    </NotesBl>
  )
}

export default NotesBlock


const NotesBl = styled.div`

  .modal-footer{
    .btn{
      &:hover{
        background: var(--color-bg);
      }
    }
  }
  .modal-body{
    form{
      .form_input{
        margin-bottom: 2rem;
          p{
            font-size: 1.5rem;
          }
          input{
            border-bottom: 2px solid var(--color-black1);
            padding: 0.5rem 0rem;
            font-size: 1.3rem;
            width: 100%;
            @media screen and (max-width:900px){
            width: 100%;
            }
            &:focus{
              border-bottom: 2px solid var(--color-bg);
            }
          }
          textarea{
              border: 1px solid var(--color-black1);
              width: 100%;
              @media screen and (max-width:900px){
            width: 100%;
            }
              height: 10rem;
              font-size: 1.3rem;
              resize: none;
              padding: 0.5rem;
              border-radius: 10px;
              &:focus{
              border-color:var(--color-bg);
            } 

            }
      }
    }
  }

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