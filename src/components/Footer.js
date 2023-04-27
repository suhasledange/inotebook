import React from 'react'
import styled from 'styled-components'
import google from './img/Google.svg'
import apple from './img/Badge.svg'
function footer() {
  return (
    <>
    <Foot>
    <div className='Container'>
          <div className='contain'>
            <h1>iNoteBook</h1>
          </div>
          <div className='contain'>
                <a>Contact Us</a>
                <a>Help</a>
                <a>Blog</a>
                <a>Developers</a>
                <a>Terms & Conditions</a>
                <a>Privacy</a>
                <a>Privacy Notice</a>
          </div>
          <div className='contain'>
                <a>
                  &copy; Automatic
                </a>
          </div>
    </div>
    </Foot>
    <Foot1>
      <div className='Container'>
        <div className='foot1_contain'>
            <h1>&copy; 2023 iNoteBook</h1>
        </div>
        <div className='foot1_contain'>
        <div className='LANG'>
            <i className="uil uil-globe"></i> <a> English</a>
        </div>
        </div>
        <div className='foot1_contain'>

                <a>Terms</a><span>&</span><a>Privacy</a>
        </div>
        <div className='foot1_contain'>
        <a className='lin'><i className="uil uil-twitter"></i></a>
       <a className='lin'><i className="uil uil-linkedin-alt"></i></a> 
        <a className='lin'><i className="uil uil-instagram"></i></a>
        <a className='lin'><i className="uil uil-facebook-f"></i></a>
        <a className='lin'><i className="uil uil-youtube"></i></a>
        </div>
        <div className='foot1_contain'>
          <div className='IMG'>
            <a><img src={apple}/></a>
          </div>
          <div className='IMG'>
            <a><img src={google}/></a>
          </div>
        </div>
      </div>
    </Foot1>
    </>
  )
}

export default footer


const Foot = styled.div`

  @media screen and (max-width:900px){
      flex-direction: column;
  }

  height: 100%;
  padding: 3rem 0rem;
  display: flex;
  background: var(--color-foot);

  .Container{
   
    @media screen and (max-width:900px){
      flex-direction: column;
      gap: 1.5rem;
  }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .contain{
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width:900px){
          gap: 0.2rem;
    }
      }
    .contain a{
      margin: 0 1rem;
      font-size: 1.1rem;
      letter-spacing: 1.2px;
      cursor: pointer;
      color: var(--color-white);
      &:hover{
        color:var(--color-light);
        }

    }
  }


`;
const Foot1 = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0rem;
 
  background: var(--color-foot1);
  .Container{
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:900px){
          flex-direction: column;
          gap: 1rem;
      }
      gap: 1rem;
    .foot1_contain{
    
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
      a{
        cursor: pointer;
        font-size: 1.1rem;
        &:hover{
              text-decoration: underline;
              text-underline-offset: 5px;
            }
      }
      .LANG{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
          i{
            color: var(--color-light);
            font-size: 1.1rem;
          }
          a{
            font-size: 1.1rem;
            
          }
        }
        .IMG{
          margin: 0rem 0.3rem;
          width: 30%;
          a{
            img{
              &:hover{
                filter: brightness(80%);
              }
            }
          }
        }
      .lin{
        background: var(--color-foot);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin: 0rem 0.2rem;
        cursor: pointer;
        &:hover{
          background: var(--color-light);
          i{
            color: var(--color-foot);
          }
        }
       
      }
      h1{
        color: var(--color-light);
        font-weight: 600;
      }
      a{
        color: var(--color-light);
        i{
          color: var(--color-light);
          font-size: 1.3rem;
        }
      }
      span{
        color: var(--color-light);
      }
    }
  }
`;