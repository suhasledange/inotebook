import styled from 'styled-components';
import NotesBlock from './NotesBlock';
import IMG from "./img/secure.png"
import { useContext, useState ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';
function About(props) {
  const context = useContext(noteContext);
  const {addNote} = context;
  const [note,setNote] = useState({title:"",description:"",tag:""})
  
  const submitNote = (e)=>{

      e.preventDefault();
        if(note.title==="" || note.description===""){
          alert("Enter Required Fields");
        }
        else{
          if(note.tag===""){
            note.tag="Personal";
          }
        addNote(note.title,note.description,note.tag);
          setNote({title:"",description:"",tag:""});
          props.showAlert("Note Added Successfully")
          alert("Note Added Successfully");

      }
      }

  const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login');
    }
  },[])
  
  return (
    <>
      <NoteBlock>
        <div className='Container'>
          <div className='NoteBlock_contain'>
            <h1>Add Notes</h1>
            <div className='AddNote'>
              <form>
                <div className='form_input'>
                  <p>Enter Tag : </p>
                  <input value={note.tag} type="text" id="tag" name="tag" placeholder='Enter Tag (Optional)' maxLength="10" onChange={onChange}/>
                </div>
                <div className='form_input'>
                  <p>Enter Title : </p>
                  <input value={note.title} minLength={3} type="text" id="title" name="title" placeholder='Enter Title' onChange={onChange} required />
                </div>
                <div className='form_input'>
                  <p>Enter Description : </p>
                  <textarea value={note.description} minLength={5} id="description" name="description" placeholder='Enter Description' required onChange={onChange}></textarea>
                </div>
                <div className='form_input'>
                  <input disabled={note.title.length<3 || note.description.length<5} onClick={submitNote} type="submit" className='form_btn' value="Add Note"/>
                </div>
              </form>
            </div>

          </div>
          <div className='NoteBlock_contain'>
            <div className='img_contain'>
              <img src={IMG} />
              <h2>iNoteBook</h2>
            </div>
          </div>

        </div>
      </NoteBlock>

      <NotesBlock />
    </>

  )
}

export default About


const NoteBlock = styled.div`
  padding-top: 10rem;
  margin-bottom:5rem;
  .Container{
    @media screen and (max-width:900px){
      flex-direction: column;
      .img_contain{
      width: 30rem;
    }
    }

    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-light);
  }
  .NoteBlock_contain{
    width: 100%;
    .img_contain{
      width: 40rem;
      text-align: center;
      h2{
        margin-top: 3rem;
        color: var(--color-bg1);
        font-weight: bolder;
        text-decoration: underline;
      }
      @media screen and (max-width:900px){
            width: 30rem;
            margin-bottom: 2rem;
      }
    }
    }

    h1{
      font-size: 2rem;
    }
    .AddNote{
      padding: 2rem 0rem;
      form{
        .form_input{
          .form_btn{
            border: 1px solid var(--color-bg1);
            background: var(--color-bg1);
            color: var(--color-bg3);
            font-weight: 600;
            transition: var(--transition);
            &:hover{
                background-color:var(--color-bg);
            }
          }

          margin-bottom: 2rem;
          p{
            font-size: 1.5rem;
          }
          input{
            border-bottom: 2px solid var(--color-black1);
            padding: 0.5rem 0rem;
            font-size: 1.3rem;
            width: 80%;
            @media screen and (max-width:900px){
            width: 100%;
            }
            &:focus{
              border-bottom: 2px solid var(--color-bg);
            }
          }
          textarea{
              border: 1px solid var(--color-black1);
              width: 80%;
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
 
`;  