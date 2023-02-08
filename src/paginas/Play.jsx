import React from 'react'
import video from "../estaticos/video.mp4"
import styled from 'styled-components'

export default function Play() {
  return (
        <Container>
            <video src={video} autoPlay loop controls muted>Seu navegador não suporta vídeo HTML5.</video>
        </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
