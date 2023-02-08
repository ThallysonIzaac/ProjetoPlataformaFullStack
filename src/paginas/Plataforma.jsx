import React from 'react'
import styled from 'styled-components';
import Header from '../componentes/Header';
import GrandeSlider from '../componentes/GrandeSlider';
import PequenosSlides from '../componentes/PequenosSlides';

export default function Plataforma() {

  
  return (
    <Container>  
      <Header/>
      <GrandeSlider />
      <PequenosSlides />
    </Container>
  )
}

const Container = styled.div`

`;
