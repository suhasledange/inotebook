import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Signup() {
  return (
    <LoginC>
    <div className='Container'>
            <h1>iNoteBook</h1>
            <form>
                <input  type="text" name='name' placeholder='Name' required/>
                <input  type="email" name='email' placeholder='Email' required/>
                <input  type="password" name='password' placeholder='Password' required/>
                <input className='btn Login' type="submit" value='Sign Up'/>

                <div className='terms'>
                <p>By creating an account, you are agreeing to our 
                <span> <Link className='lk'>Terms of Service</Link> <span>and</span> <Link className='lk'>Privacy Policy.</Link></span> </p>
                </div>
                
                <div className='bord'>
                    <div className='bd'> </div>
                    <span>or</span>
                    <div className='bd'></div>
                </div>

                <div className='register'>
                <p>Already have an account ?</p>
                <Link className='lk' to="/login">LogIn</Link>
                </div>
            </form>
    </div>  
</LoginC>
  )
}

export default Signup


const LoginC = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    .Container{
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 3rem;
            color: var(--color-bg1);
            margin-bottom: 3rem;
        }
        form{
            p{
                font-size: 1.1rem;
            }
                .lk{
                    color: var(--color-bg1);
                    text-underline-offset: 4px;
                    font-size: 1.1rem;
            }
            .Login{
                &:hover{
                    color: var(--color-bg3);
                    background: var(--color-bg);
                }
            }
            .bord{
                display: flex;
                align-items: center;
                justify-content: center;

                .bd{
                    background: red;
                    width: 100%;
                    height: 1rem;
                }
            }
            .register{
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
            }
            width: 26rem;
            input{
            border: 2px solid var(--color-light);
            border-radius: 6px;
            padding: 0.5rem;
            font-size: 1.3rem;
            width: 100%;
            margin-bottom: 1rem;
            @media screen and (max-width:900px){
            width: 100%;
            }
            &:focus{
              border: 2px solid var(--color-bg);
            }
          }
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

`;