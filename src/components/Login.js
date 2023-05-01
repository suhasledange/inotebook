import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Login() {
    
    const [Credentials,setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:Credentials.email,password: Credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/about");
        }
        else{
            alert("Invalid credentials");
        }

    }


  const onChange = (e)=>{
    setCredentials({...Credentials,[e.target.name]:e.target.value})
  }

  return (
    <LoginC>
        <div className='Container'>
                <h1>iNoteBook</h1>
                <form onSubmit={handleSubmit}>
                    <input value={Credentials.email} type="email" name='email' placeholder='Email' onChange={onChange} required/>
                    <input value={Credentials.password} type="password" name='password' placeholder='Password' onChange={onChange} required/>
                    <input className='btn Login' type="submit" value='Log In'/>
                    <Link className='lk'>Forgot your password?</Link>
                    
                    <div className='bord'>
                        <div className='bd'> </div>
                        <span>or</span>
                        <div className='bd'></div>
                    </div>

                    <div className='register'>
                    <p>Don't have an account ?</p>
                    <Link className='lk'>Sign Up</Link>
                    </div>
                </form>
        </div>  
    </LoginC>
  )
}

export default Login

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
                display: flex;
                gap: 0.5rem;
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