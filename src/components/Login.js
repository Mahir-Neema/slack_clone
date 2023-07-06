import { Button } from '@mui/material';
import React from 'react'
import { styled } from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };

  return (
    <LoginContainer>
        <LoginInsideConatiner>
            <img src='https://www.vectorlogo.zone/logos/slack/slack-tile.svg'/>
            <h1>Sign in</h1>
            <p>slack</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInsideConatiner>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: var(--slack—color);
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInsideConatiner = styled.div`

    padding: 100px;
    text-align: center;


    > img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    >h1 {
        color: white;
    }

    > p{
        color: white;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
        :hover{
            background-color: #128d0a;
        }
    }
`;