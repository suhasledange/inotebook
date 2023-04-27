import React ,{useEffect,useRef}from 'react'
import { Link ,useLocation} from "react-router-dom";
import '../App.css'
import styled from 'styled-components';

function Navbar(props) {

  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location]);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // console.log("clicked outside")
      let ham = document.querySelector(".hamburger");
      let mob = document.querySelector(".mob");
      ham.classList.remove("ham");
      mob.classList.remove("mob1");
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ ref ]);
  
  const hamClick = ()=>{
    let ham = document.querySelector(".hamburger");
    let mob = document.querySelector(".mob");
    ham.addEventListener("click",()=>{
      ham.classList.toggle("ham");
      mob.classList.toggle("mob1");
    })
  }

  return (
    <>
  <nav>
  <div className='Container'  ref={ref} >
    <div className='contain'>
      <h1>iNoteBook</h1>
    </div>

    <div className="contain mob">
    <Link className={`navbarbtn ${location.pathname === "/" ? "active" : ""}`}aria-current="page" to="/">Home</Link>
    <Link className={`navbarbtn ${location.pathname === "/about" ? "active" : ""}`}aria-current="page" to="/about">Notes</Link>
      <a className='navbarbtn'>Donate</a>
      <a className='navbarbtn'>Contact Us</a>
    <a className="btn navbtn">Login</a>
      </div>
      <div className="hamburger" onClick={hamClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
  </div>
  </nav>
    </>
  )
}

export default Navbar


