import React from 'react'
import styled from 'styled-components'
function Opinion() {
  return (
    <Opion className='Container'>
        <h1>What people are saying</h1>
        <div className='contain'>
                <div className='saying'>
                        <h2>If you’re not using iNoteBook, you’re missing out.</h2>
                        <p>TechCrunch</p>
                </div>
                <div className='saying'>
                        <h2>If you’re looking for a cross-platform note-taking tool with just enough frills, it’s hard to look beyond iNoteBook.</h2>
                        <p>MacWorld</p>
                </div>
                <div className='saying'>
                        <h2>If you want a truly distraction-free environment then you can’t do better than iNoteBook for your note-taking needs.</h2>
                        <p>Zapier</p>
                </div>
        </div>
    </Opion>

  )
}

export default Opinion

const Opion = styled.div`
border-bottom: 1px solid var(--color-light);
padding-bottom: 5rem;
margin-bottom: 5rem;
width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    h1{
        font-size: 3rem;
        margin-bottom: 5rem;
        color: var(--color-black1);
        @media screen and (max-width:900px){
                font-size: 2.5rem;
        }
    }
    .contain{
        display: flex;
        @media screen and (max-width:900px){
            flex-direction: column;
        }
        .saying{
            @media screen and (max-width:900px){
                width: 100%;
                margin: 0;
                padding-bottom: 1.5rem;
            }
            padding: 0rem 1.5rem;
            border-left: 5px solid var(--color-bg1);
            margin: 0rem 2rem;
            width: 50%;
            height: 100%;
            h2{
                font-size: 1.3rem;
                color: var(--color-black1);
                margin-bottom: 0.5rem;
                font-weight: 600;
            }
            p{
                font-style: italic;
                letter-spacing: 1px;
                font-size: 1rem;
            }
        }
    }

`;