import React from 'react'
import { styled } from 'styled-components'
import { db } from '.././firebase';

function SidebarOptions({Icon,title, addChannelOption,id}) {

    const addChannel = () =>{
        const channelName = prompt("Please Enter the channel name:");

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };

    const selectChannel = () =>{

    };

  return (
    <SidebarOptionsContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontsize="small" style={{padding: 10}}/>}
        {Icon ? (<h3>{title}</h3>):(<SidebarOptionChannel> <span>#</span>{title} </SidebarOptionChannel>)}
    </SidebarOptionsContainer>
  )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3{
        font-weight: 500;
    }

    > h3 > span{
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 2px;
    font-weight: 300;
`;