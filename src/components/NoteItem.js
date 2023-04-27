import React from 'react'
import styled from 'styled-components';
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react'
function NoteItem(props) {
  const context = useContext(noteContext);
    const {note,updateNote} = props;
    const {deleteNote} = context;
    const date = note.date.split("T");
  return (
    <NoteItm>
        <div className='Card'>
          <div className='tag'>
            <p>{note.tag}</p>
          </div>
          <div className='Card_info'>
              <h2>Title : </h2>
              <h4>{note.title}</h4>
          </div>
          <div className='Card_info'>
            <h2>Description : </h2>
            <p>{note.description}</p>
          </div>
          <div className='Card_info'>
            <h2>Date : </h2>
            <div className='date'>
            <p>{date[0]},</p> <p>{date[1].slice(0,8)}</p>
            </div>
          </div>

          <div className='edit'>
              <i onClick={()=>deleteNote(note._id)} className="uil uil-trash-alt" ></i>
            
              <i onClick={()=>updateNote(note)} className="uil uil-pen"></i>
          
        </div>

        </div>
    </NoteItm>
  )
}

export default NoteItem

const NoteItm = styled.div`

  .edit{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    i{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--color-bg3);
      background: var(--color-bg1);
      margin: 0.5rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      transition: var(--transition);
      &:hover{
        background: var(--color-bg);
      }
    }
  }
  
  width: 25rem;
  height: 30rem;
  margin: 1rem 4rem 3rem 0rem;
  padding: 2rem;
  border: 1px solid var(--color-bg3);
  box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
  background: var(--color-bg3);
  position: relative;
  border-left: 5px solid var(--color-bg1);
  &:hover{
  box-shadow: 0 0 10px 8px rgba(0,0,0,0.2);

  }
 /* overflow: scroll; */
 .Card{
    .tag{
      padding: 1rem;
      padding-bottom: 0.25rem;
      background: var(--color-bg1);
      position: absolute;
      color: var(--color-bg3);
      font-size: 1.3rem;
      right: 0;
      top: 0;
    }

    width: 100%;
    height: 100%;
    overflow:scroll;
    ::-webkit-scrollbar{
      display: none;
    }
    .Card_info{
      .date{
        display: flex;
        align-items: center;
        gap: 5px;
      }
      &:nth-child(4){
        display: flex;
        gap: 1rem;
        }
      width: 100%;
      border-bottom: 1px solid var(--color-light);
      padding: 1rem 0rem;
      h2{
        font-size: 1.8rem;
        font-style: italic;
        text-underline-offset: 4px;
        color: var(--color-black1);
        font-weight: 600;
        margin-bottom: 15px;
      }
      p{
        font-size: 1.3rem;
        color: var(--color-black1);
        word-wrap: break-word;
      }
    }
  }


`;

