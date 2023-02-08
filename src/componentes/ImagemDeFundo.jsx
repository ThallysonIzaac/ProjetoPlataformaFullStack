import React from 'react'
import imagemdefundo from "../imagens/imagemdefundo.jpg";
import styled from 'styled-components';

export default function ImagemDeFundo() {
  return (
    <Container><img src={imagemdefundo} alt="imagemdefundo" /></Container>
  )
}

const Container = styled.div`
    heigth:100vh;
    width:100vw;
    background-color: rgba(0, 0, 0, 0.900);
    img{
        height:100vh;
        width:100vw;
    }
`;
