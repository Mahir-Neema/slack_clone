import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react'
import { styled } from 'styled-components';
import SidebarOptions from './SidebarOptions';
import { db } from '.././firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import { doc, getDoc } from "firebase/firestore";

function Sidebar() {

  const [channels, loading, error] = useCollection(db.collection('rooms'));

  return (
    <SidebarConatiner>
        <SidebarHeader>
          <SidebarInfo>
              <h2>MAHIR</h2>
              <h3>
                <FiberManualRecord/>
                Mahir Neema
              </h3>
          </SidebarInfo>
          <Create/>
        </SidebarHeader>

        <SidebarOptions Icon={InsertComment} title="Threads"/>
        <SidebarOptions Icon={Inbox} title="Mentions & Reactions"/>
        <SidebarOptions Icon={Drafts} title="Saved Items"/>
        <SidebarOptions Icon={BookmarkBorder} title="Channel browser"/>
        <SidebarOptions Icon={PeopleAlt} title="People & user Groups"/>
        <SidebarOptions Icon={Apps} title="Apps"/>
        <SidebarOptions Icon={FileCopy} title="File browser"/>
        <SidebarOptions Icon={ExpandLess} title="Show less"/>

        <hr/>
        <SidebarOptions Icon={ExpandMore} title="Show more"/>
        <hr/>
        <SidebarOptions Icon={Add} addChannelOption title="Add Channel"/>

        {/* {channels ? getDoc.map(doc=>(
          <SidebarOptions  key={doc.id} id={doc.id}  title={doc.data().name}/>
        )):""} */}

        {channels && channels.docs && channels.docs.map((doc) => (
          <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
        ))}

    </SidebarConatiner>
  )
}

export default Sidebar

const SidebarConatiner = styled.div`
  background-color: var(--slack—color);
  flex: 0.3;
  color: white;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top:60px;

  > hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 1000px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2{
    font-size: 15px; 
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3  > .MuiSvgIcon-root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;