import React from 'react'
import styled from 'styled-components'

function Underneath() {
  return (
    <Underneath_contain>
        <Under>
            <h1>
            Comprehensive underneath, simple on the surface
            </h1>
            <Under_Component>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-cloud-redo"></i>
                            <h2>Use it everywhere</h2>
                        </div>
                        <p>Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.</p>
                </Under_block>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-bookmark"></i>
                            <h2>Stay organized</h2>
                        </div>
                        <p>Add tags to find notes quickly with instant searching.</p>
                </Under_block>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-users-alt"></i>
                            <h2>Work together</h2>
                        </div>
                        <p>Share a to-do list, post some instructions, or publish your notes online.</p>
                </Under_block>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-clock-five"></i>
                            <h2>Go back in time</h2>
                        </div>
                        <p>Notes are backed up with every change, so you can see what you noted last week or last month.</p>
                </Under_block>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-notebooks"></i>
                            <h2>Markdown support</h2>
                        </div>
                        <p>Write, preview, and publish your notes in Markdown format.</p>
                </Under_block>
                <Under_block>
                        <div className='block-icn'>
                        <i className="uil uil-exclamation-circle"></i>
                            <h2>It’s free</h2>
                        </div>
                        <p>Apps, backups, syncing, sharing – it’s all completely free.</p>
                </Under_block>
            </Under_Component>
            
        </Under>

    </Underneath_contain>
  )
}

export default Underneath

const Under = styled.div`
    width: var( --container-width-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 0rem;
    h1{
        width: 50%;
        font-size: 3rem;
        text-align: center;
        margin-bottom: 5rem;
        color: var(--color-black1);

        @media screen and (max-width:900px){
                font-size: 2.5rem;
                width: 90%;
        }
    }
`;
const Under_Component = styled.div`
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 2rem;
        margin: 0rem 8rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--color-light);

        @media screen and (max-width:900px){
            grid-template-columns: 1fr;
            width: var(--container-width-sm);
        }
`;
const Under_block = styled.div`
background: var(--color-white);
border-bottom: 5px solid var(--color-bg1);
    cursor: pointer;
    padding: 2rem;
    padding-bottom: 4rem;
    border-radius: 10px;
    box-shadow: 0 0 1rem 0.2rem rgba(0,0,0,0.2);
    &:hover{
        box-shadow: 0 0 1rem 0.4rem rgba(0,0,0,0.2);
    }
    p{
        font-size: 1.19rem;
        color: var(--color-black1);
    }
    .block-icn{
        display: flex;
        align-items: center;
        gap: 1rem;
        h2{
            font-size: 1.5rem;
            color: var(--color-black1);

        }
        i{
            font-size: 2rem;
            color: var(--color-bg1);
        }
}
`;
const Underneath_contain = styled.div`
    background: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
`;