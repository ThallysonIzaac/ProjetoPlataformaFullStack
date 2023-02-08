import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import Header from "../componentes/Header";
import styled from "styled-components";

import Filme from "../componentes/Filme";
import { API_KEY } from "../utils/constantes";

const FilmeUnico = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    getMovie(movieUrl);
  }, []);

  return (
    <>
    <Header/>
    <Container>
    
    <div className="movie-page">
      
      {movie && (
        <>
          <Filme movie={movie} showLink={false} />
          
          <div className="content">
            <Link to={`/play/${movie.id}`}><button>ASSISTIR</button></Link>
            <div className="info">
              <h3>
                Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            
            <h3>
              Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
    </Container>
    </>
  );
};

const Container = styled.div`
  background-color:#2c374e;
  height:100vh;
  width:100vw;
  position:sticky;
  display:flex;
  justify-content:center;
  align-items:center;
  .movie-page{
    display:flex;
    flex-direction:row;
    align-items:center;
    position:relative;
    height:calc(1000vh/15);
    width:65vw;
    .content{
      position: absolute; 
      bottom: 0;
      right:0;
      width:60%;
      h3{
        font-size:15px;
      }
      p{
        font-size:12px;
      }
      button{
        margin-bottom:2vh;
        padding:10px;
        font-size:20px;
        color:#1A202C;
        border-radius:5px;
        cursor:pointer;
        border:2px solid #1A202C;
        background-color:#ffffff60;
      }
      button:hover{
        background-color:#ffffff99;
      }
      .info{
        display:flex;
        flex-direction:row;
        h3{
          font-size:12px;
        }
        p{
          font-size:12px;
        }
      }
    }
  }
`;

export default FilmeUnico;