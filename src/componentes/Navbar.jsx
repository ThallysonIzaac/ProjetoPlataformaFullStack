import React from 'react'
import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components';
import NavbarItem from './NavbarItem'

const Navbar = ({ active }) => {

  const closeNavbar = () => {
    active(false)
  }

  return (
    <Container navbar={active}>
      <FaTimes onClick={closeNavbar} />  
      <Content>
        
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  left: ${props => props.navbar ? '0' : '-100%'};
  top: 0px;
  left: 0px;
  width: 150px;
  z-index:2;
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 150px;
    }
  }
`;

const Content = styled.div`
  margin-top: 50px;
`;

export default Navbar