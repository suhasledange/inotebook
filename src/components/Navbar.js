import React ,{useEffect}from 'react'
import { Link ,useLocation} from "react-router-dom";
import '../App.css'
import styled from 'styled-components';

function Navbar() {

  let location = useLocation();

  useEffect(()=>{
    console.log(location.pathname);
  },[location]);

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
     {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">iNoteBook</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === "/" ? "active" : ""}`}aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
  <nav>
  <div className='Container'>
    <div className='contain'>
      <h1>iNoteBook</h1>
    </div>

    <div className="contain mob">
    <Link class={`navbarbtn ${location.pathname === "/" ? "active" : ""}`}aria-current="page" to="/">Home</Link>
    <Link class={`navbarbtn ${location.pathname === "/about" ? "active" : ""}`}aria-current="page" to="/about">Notes</Link>
      <a className='navbarbtn'>Donate</a>
      <a className='navbarbtn'>Contact Us</a>
    <a className="btn navbtn">Login</a>
      </div>
      <div class="hamburger" onClick={hamClick}>
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


