import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Signup(props) {
    const [Credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password}=Credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
          });
          const json = await response.json();
        //   console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/login");
            props.showAlert("Account Created Successfully")
        }
        else{
            alert("Invalid Credentials");
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
                    <input onChange={onChange} type="text" name='name' placeholder='Name' required />
                    <input onChange={onChange} type="email" name='email' placeholder='Email' required />
                    <input onChange={onChange} type="password" name='password' placeholder='Password' required />
                    <input onChange={onChange} type="password" name='cpassword' placeholder='Confirm Password' required />
                    <input className='btn Login' type="submit" value='Sign Up' />

                    <div className='terms'>
                        <p>By creating an account, you are agreeing to our
                            <span> <Link className='lk'>Terms of Service</Link> <span>and</span> <Link className='lk'>Privacy Policy.</Link></span> </p>
                    </div>

                    <div className='bord'>
                        <div className='bd'> </div>
                        <span>OR</span>
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
                margin: 5px 0;
            }
                .lk{
                    color: var(--color-bg1);
                    text-underline-offset: 4px;
                    font-size: 1.1rem;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                        color: var(--color-bg);
                    }
            }
            .Login{
                &:hover{
                    color: var(--color-bg3);
                    background: var(--color-bg);
                }
            }
            .bord{
                margin:1rem 0rem;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 90%;
                gap: 1rem;
                .bd{
                    background: var(--color-bg1);
                    width: 100%;
                    height: 1px;
                }
            }
            .register{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                p{
                    margin: 2px 0;
                }
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