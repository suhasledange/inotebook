import React ,{useEffect,useRef}from 'react'
import { Link ,useLocation, useNavigate} from "react-router-dom";
import '../App.css'
import styled from 'styled-components';
import img from './img/profile.png'
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
      let user = document.querySelector(".Contain");
      user.classList.remove("show");
      ham.classList.remove("ham");
      mob.classList.remove("mob1");
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ ref ]);
  
  const userphoto = ()=>{
      let user = document.querySelector(".Contain");
      user.classList.toggle("show");
  }

  const hamClick = ()=>{
    let ham = document.querySelector(".hamburger");
    let mob = document.querySelector(".mob");
    ham.addEventListener("click",()=>{
      ham.classList.toggle("ham");
      mob.classList.toggle("mob1");
    })
  }
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
      navigate('/login');
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
    {/* <a className="btn navbtn">Login</a> */}
    {!localStorage.getItem('token') ?
    <Link className='btn navbtn' to="/login" role='button'>Login</Link> :  
      <>
      <User onClick={userphoto} className='user'>
              <img src={img} />
      </User>
      <UserDetail>
          <div className='Contain'>
            <h1>Name Surname</h1>
            <p>Email</p>
            <Link className='manage'>Manage Your Account</Link>
            <Link onClick={handleLogout} className='btn navbtn' to="/login" role='button'>Logout</Link>
          </div>
      </UserDetail>
      </>  
    // <Link onClick={handleLogout} className='btn navbtn' to="/login" role='button'>Logout</Link>
    
    }
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

const User = styled.div`
  margin-left: 2rem;
  cursor: pointer;
  transition: var(--transition);
  &:hover{
      filter: brightness(110%);
  }
`;
const UserDetail = styled.div`
  
  .Contain{
    transition: var(--transition);
    transform: translateX(500%);
    width: auto;
    padding: 4rem 3rem;
    background: var(--color-bg1);
    box-shadow: 0 0 1rem 0.5rem rgba(0,0,0,0.2);
    position: absolute;
    right: 5%;
    top: 110%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 1.5rem;
      color: var(--color-bg3);
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.1rem;
      color: var(--color-bg3);
    }
    .manage{
      text-decoration: none;
      width: 147%;
      border-top: 1px solid var(--color-light);
      border-bottom: 1px solid var(--color-light);
      padding: 0.8rem 0rem;
      color: var(--color-bg3);
      margin-bottom: 2rem;
      margin-top: 0.5rem;
      transition: var(--transition);
      font-size: 1.1rem;
      &:hover{
        background: var(--color-bg);
        border-color:var(--color-bg) ;
      }
    }
    .navbtn{
      margin: 0;
      &:hover{
        background: var(--color-bg);
      }
    }
    
  }
  .show{
    transform: translateX(10%);
  }
    `;