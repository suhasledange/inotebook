import styled from 'styled-components';
import NotesBlock from './NotesBlock';
import IMG from "./img/secure.png"
function About() {

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
              <input type="text" placeholder='Enter Tag (Optional)' required/>
            </div>
            <div className='form_input'>
              <p>Enter Title : </p>
              <input type="text" placeholder='Enter Title' required/>
            </div>
            <div className='form_input'>
              <p>Enter Description : </p>
              <textarea placeholder='Enter Description'></textarea>
            </div>
            <div className='form_input'>
            <input type="submit" className='form_btn' placeholder='Enter Title'/>
            </div>
        </form>
      </div>

    </div>
        <div className='NoteBlock_contain'>
          <div className='img_contain'>
                <img src={IMG}/>
                <h2>iNoteBook</h2>
          </div>
        </div>

      </div> 
    </NoteBlock>
      <NotesBlock/>
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