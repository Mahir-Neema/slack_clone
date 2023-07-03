import { Create, FiberManualRecord } from '@mui/icons-material';
import React from 'react'
import { styled } from 'styled-components';

function Sidebar() {
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