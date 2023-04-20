import React from 'react'
import styled from 'styled-components'

function footer() {
  return (
    <Foot>
    <div className='container'>
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
                <a>Press</a>
                <a>Privacy Notice</a>

          </div>
          <div className='contain'>
                <p>
                  &copy; Automatic
                </p>
          </div>
    </div>
    </Foot>
  )
}

export default footer


const Foot = styled.div`
  padding: 2rem 0rem;
  background: var(--color-light);
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .contain a{
      
    }
  }


`;