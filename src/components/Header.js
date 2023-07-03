import styled from 'styled-components'
import React from 'react'
import { Avatar } from '@mui/material';
import { AccessTime} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <HeaderContainer>
      {/* header left  */}
      <HeaderLeft>
          <HeaderAvatar 
            // add on click
          />

          <AccessTime/>
      </HeaderLeft>

      {/* header middle */}
      <HeaderSearch>
        <SearchIcon/>
        <input placeholder='Search'/>
      </HeaderSearch>


      {/* header right */}
      <HeaderRight>
        <HelpOutlineIcon/>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack—color); 
  color: #fff;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
`;