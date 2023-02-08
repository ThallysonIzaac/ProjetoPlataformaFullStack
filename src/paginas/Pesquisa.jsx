import React, { useEffect, useState }  from 'react'
import Header from '../componentes/Header';
import styled from 'styled-components';
import { useSearchParams } from "react-router-dom";
import { API_KEY } from '../utils/constantes.js';
import FilmesPesquisa from '../componentes/FilmesPesquisa';

export default function Pesquisa() {

    const [pesquisaParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = pesquisaParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
    }, [query]);

  return (
    <Container>
        <Header/>
        <div className="container-2">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length > 0 &&
                movies.map((movie) => <FilmesPesquisa key={movie.id} movie={movie} />)}
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color:#1A202C;
    min-height:100vh;
    height:auto;
    width:100vw;
    position:absolute;
    align-items:center;
    .title{
        text-align:center;
        margin-top:60px;
        margin-bottom:30px;
        color:white;
        font-size:20px;
    }
    .movies-container{
        display:grid;
        grid-template-columns: auto auto auto auto auto;
        row-gap: 50px;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom:30px;
    }
`;