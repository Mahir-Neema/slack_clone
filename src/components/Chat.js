import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components'
import {selectRoomId} from "../features/appSlice";
import ChatInput from './ChatInput';
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import { db } from '../firebase';

function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp","asc")
    )

  return (
    <ChatContainer >
        <>
        <Header>
            <HeaderLeft>
                <h4><strong>#{roomDetails?.data().name}</strong></h4>
                <StarBorderOutlined/>
            </HeaderLeft>

            <HeaderRight>
                <p>
                    <InfoOutlined/> Details
                </p>
            </HeaderRight>
        </Header>

        <ChatMessages>
            
        </ChatMessages>

        <ChatInput 
            channelName = {roomDetails?.data().name}
            channelId = {roomId}
        />
        </>
    </ChatContainer>
  )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;