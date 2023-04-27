import React from 'react'
import styled from 'styled-components'
import imgs from './img/features_apps.svg'
function Available() {
  return (
    <Avail className='Container'>
        <h1>Available everywhere you need it</h1>
        <div className='IMGS'>
       <a ><img src={imgs}/> </a>
        </div>
    </Avail>

  )
}

export default Available

const Avail = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5rem;
    h1{
        font-size: 3rem;
        color: var(--color-black1);

        @media screen and (max-width:900px){
            font-size: 2.5rem;
        }
    }
    .IMGS{
        border-bottom: 5px solid var(--color-bg1);
        border-radius: 15px;
        cursor: pointer;
        padding:3rem 1rem 2rem 1rem;
        margin-bottom: 5rem;
       
    }
`;