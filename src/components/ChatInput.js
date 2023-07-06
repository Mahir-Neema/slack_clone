import { Button } from '@mui/material';
import React, { useState } from 'react'
import { styled } from 'styled-components'
import {db} from '../firebase';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {

    const [input,setinput] = useState('');

    const sendMessage = (e) =>{
        e.preventDefault();
        if(!channelId){
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'M N',
            userImage: 'https://img.freepik.com/premium-photo/beautiful-girl-white-background-woman_902994-458.jpg?w=740'
        });

        setinput('');
    }

  return (
    <ChatInputConatiner>
        <form>
            <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder={`Message ${channelName}`}/>
            <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
        </form>
    </ChatInputConatiner>
  )
}

export default ChatInput

const ChatInputConatiner = styled.div`
    border-radius: 20px; 
    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        outline: none;
        padding: 20px;
        position: fixed;
        bottom: 30px;
        width:60%;
        border: 1px solid gray;
        border-radius: 3px;
    }

    >form > button {
        display: none; // important
    }
`;