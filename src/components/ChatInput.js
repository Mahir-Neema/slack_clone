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
            userImage: 'https://cdn.gencraft.com/prod/user/e2a5d868-6261-42de-b772-3151687007d7/1305b0f0-491c-42b2-8361-53e56fe3c7c5/images/image0_1024_1024_watermark.jpg?Expires=1696315989&Signature=NRyiWW8rzMZrvcSgyvgcpZahRx-YO8pDkNkp01DsyUOrmgTlhcmzVC9efPh3P9yxqzg-yl3mtV7lmV~VfYvTE3bjOT5xRlhVAeeozGAUVnpCkpE~sgBcD7o~uBUz3SVAm~WGntgTWi2Pbrz1NbTMK4h4ZXfz-2mTueEZPC9b1nuWRMVt299KZDdnfc8ZjmKNgLhm-T789~r56Xeeu7zOSwYRGPMU5~WPJxd80fJH57lZW56kcf4iRZcFgogjRSEV0GamxtnJ4fMncBzeDEnT7NyE6IUm~oW2BuOWNjmARJHC2PX-TfoxxXaM7xzjQHiDu7vIX5vPpqGmBgBWDzuFSA__&Key-Pair-Id=K3RDDB1TZ8BHT8'
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