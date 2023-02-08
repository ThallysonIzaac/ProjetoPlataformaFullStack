import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FilmesPesquisa = ({ movie = true }) => {
  return (
    <Link to={`/filmeunico/${movie.id}`}>
    <Container >
        
      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
    </Container>
    </Link>
  );
};

const Container = styled.div`
    height:225px;
    width:150px;
    padding:20px;
    display:flex;
    flex-direction:column;
    background-color:#2c374e;
    :hover{
        border:1.3px solid #00000030;
        border-radius:5px;
        cursor:pointer;
        box-shadow: 0px 2px 10px 2px #888888;
        transition:0.25s;
    }
    img{
        text-align:center;
        height:150px;
        border: 1px solid black;
    }
    h2{
        font-size:10px;
        text-align:center;
        color:white;
    }
`;



export default FilmesPesquisa;