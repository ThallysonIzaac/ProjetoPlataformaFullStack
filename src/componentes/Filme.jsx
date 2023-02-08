import React from "react";
import styled from "styled-components";

const Filme = ({ movie = true }) => {
  return (
    <Container>
    <div className="movie-card">
      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
      <h2 className="titulo-filme">{movie.title}</h2>
      <p className="tagline">{movie.tagline}</p>
    </div>
    </Container>
  );
};

const Container = styled.div`
height:100vh;
display:flex;
align-items:center;
  .movie-card{
    padding:10px;
    border-radius:5px;
    border:5px solid #ffffff99;
    background-color:#1A202C;
    display:flex;
    align-items:center;
    flex-direction:column;
    p{
      width:20vw;
      text-align:center;
      color:white;
    }
    img{
      height:calc(100vh/2.3);
    }
    .titulo-filme{
      font-size:calc(50vh/15);
      width:20vw;
      color:white;
      text-align:center;
    }
  }
    
`;

export default Filme;