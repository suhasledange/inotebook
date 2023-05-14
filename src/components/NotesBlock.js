import React, { useEffect ,useRef} from 'react'
import { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import styled from 'styled-components';

function NotesBlock() {
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context;
  const [note,setNote] = useState({utitle:"",udescription:"",utag:""})
  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, utitle: currentNote.title,udescription:currentNote.description,utag:currentNote.tag})

  }

  useEffect(() => {
    
    getNotes()
  }, [])


  const submitNote = (e)=>{
    e.preventDefault();
      if(note.utitle==="" || note.udescription===""){
        alert("Enter Required Fields");
      }
       else
          editNote(note.id,note.utitle,note.udescription,note.utag);

      refClose.current.click();
}

const onChange = (e)=>{
  setNote({...note,[e.target.name]:e.target.value})
}

  return (
    <NotesBl>

<button style={{display:"none"}} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
                <div className='form_input'>
                  <p>Enter Tag : </p>
                  <input value={note.utag} type="text" id="utag" name="utag" placeholder='Enter Tag (Optional)' maxLength="10" onChange={onChange}/>
                </div>
                <div className='form_input'>
                  <p>Enter Title : </p>
                  <input value={note.utitle} type="text" id="utitle" name="utitle" placeholder='Enter Title' onChange={onChange} required />
                </div>
                <div className='form_input'>
                  <p>Enter Description : </p>
                  <textarea value={note.udescription} id="udescription" name="udescription" placeholder='Enter Description' onChange={onChange}></textarea>
                </div>
              </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.utitle.length<3 || note.udescription.length<5}  onClick={submitNote} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>

      <div className='Container'>
        <h1>Your Notes</h1>
        <div className='Main_Notes'>
          <div className='empty'>
              {notes.length === 0 && "No Notes to display"}
          </div>
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
      @media screen and (max-width:900px){
        justify-content: center;
      }
      flex-wrap: wrap;
      .empty{
        margin-left: 10px;
        font-size: 1.1rem;
        font-style: italic;
        color: var(--color-bg1);
      }
    }  
    }

`;