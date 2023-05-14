import React, { useContext } from 'react'
import { Link ,useLocation} from "react-router-dom";
import noteContext from '../context/notes/noteContext';
import styled from 'styled-components';
import img from './img/back.jpg'
import Underneath from './Underneath';
import Opinion from './Opinion';
import Available from './Available';

function Home() {
  const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <>
      <HomeContain>
    <HomeDetail>
          <h1>
            The Simplest Way To Keep Notes
          </h1>
        <p>
        All your notes, synced on all your devices. Get iNoteBook now for iOS, Android, Mac, Windows, Linux, or in your browser.
        </p>
        {/* <a className='btn btn-sign'>SignUp Now</a> */}
        {!localStorage.getItem('token') ?
          <Link className='btn btn-sign' to="/signup" role='button'>SignUp Now</Link> :
          <Link className='btn btn-sign' to="/about" role='button'>iNoteBook</Link>
        }

    </HomeDetail>
      </HomeContain>
      <Underneath/>
      <Opinion/>
      <Available/>


      {/* <div className='container my-3'>
        <h1>Add a Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h1>Your Note</h1>
        
        
      </div> */}
    </>
  )
}

export default Home

const HomeContain = styled.main`
    min-height: 100vh;
    padding: 0 calc(2vw); 
    position: relative;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    &:before{
        background: url(${img}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        filter: brightness(50%);
    }

`

// const HomeContain = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-image: url(${img});
//   background-size: cover;
//   background-repeat: no-repeat;
//   /* filter: brightness(50%); */
//   display: flex;
//   align-items: center;

// `
// ;
const HomeDetail = styled.div`

  margin-left: 10rem;
  width: 40%;

  @media screen and (max-width:900px){
      width: 80%;
      margin-left: 2rem;
    }

  h1{
    font-size: 5rem;
    color: var(--color-bg3);
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1.1;

    @media screen and (max-width:900px){
        font-size: 4rem;
    }
  }
  p{
    margin: 1rem 0rem;
    font-size: 1.3rem;
    letter-spacing: 1.3px;
    word-spacing: 2px;
    color: var(--color-bg3);
  }
  .btn-sign{
    border-color:var(--color-bg3);
    background: transparent;
    transition: var(--transition);
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem 0rem;
    &:hover{
      background: var(--color-bg1);
      box-shadow: 0 0 1rem 0.5rem rgba(0,0,0,0.2);
    }
  }


`;