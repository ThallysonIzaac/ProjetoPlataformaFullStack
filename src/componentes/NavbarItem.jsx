import React from 'react'
import styled from 'styled-components';

const NavbarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 15px;
  color: white;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 10px 15px;
  > svg {
    margin: 0 10px;
  }
  &:hover {
    background-color: black;
  }
`;

export default NavbarItem