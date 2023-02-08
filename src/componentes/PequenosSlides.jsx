import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY, TMDB_BASE_URL } from '../utils/constantes';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }  

const PequenosSlides = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        setMovies(result.data.results);
      };
      fetchData();
    }, []);
  
    if (!movies || movies.length === 0) {
      return null;
    }
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
    return (
        <CarouselContainer>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            <div className="pequeno-slide">
                <div className="nome-pequeno-slide">Nossos melhores filmes exclusivos</div>
                <Slider {...settings}>
                
                {movies.map(movie => (
                  <Link to={`/filmeunico/${movie.id}`}>
                    <div className='box-pequeno-filme' key={movie.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <h1 className='nome-filme'>{movie.title}</h1>
                    </div>
                  </Link>
                ))}
                </Slider>
            </div>
            
        </CarouselContainer>
);
};

const CarouselContainer = styled.div`
  width: 100vw;
  height: 300px;
  margin-top:300px;
  position:absolute;
  background-color: #1A202C; 
  .pequeno-slide{
    background-color: #1A202C; 
  }
  .slick-list{
    overflow:visible;
  }
  .box-pequeno-filme:hover{
    display:block;
    border:1.3px solid #00000030;
    border-radius:5px;
    cursor:pointer;
    z-index:999;
    box-shadow: 0px 2px 7px 1px #888888;
    transition:0.25s;
    background-color:#2c374e;
    img{
        margin: auto;
        display: block;
        text-align:center;
        width:100%;
        height:calc(100vh / 4.5);
        height:px;
        text-align:center;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    h1{
        height:calc(100vh / 11);
    }
    
  }
  .nome-pequeno-slide{
    font-size:25px;
    margin-left:2vw;
    margin-bottom:10px;
    position:relative;
    z-index:1;
    color:white;
  }
  .slick-dots{
    display:none;
  }
  .slick-dots button::before{
    font-size:10px;
    opacity:.60;
  }
  .nome-filme{
    color:white;
    font-size:10px;
    text-align:center;
    width: calc(100vw / 6);
    height:calc(100vh / 8);
    margin-left: calc(100vw / 70)
  }
  ul{
    position:relative;
    top:-52px;
  }
  .slick-prev::before{
    color:black;
    position: absolute;
    left: calc(100vw / 20);
    top: calc((100vw / 100) - 11vh);
    font-size:calc(100vh / 10);
  }
  .slick-next::before{
    color:black;
    position:absolute;
    top: calc((100vw / 100) - 11vh);
    right:calc(100vw / 20);
    font-size:calc(100vh / 10);
  }
  .slick-prev{
    background-color:white;
    color:black;
    z-index: 1;
  }
  .slick-next{
    font-size:50px;
    background-color:white;
    color:black;
    z-index: 1;
  }
 
`;

const Image = styled.img`
  width: calc(100vw / 6);
  height: calc(100vh / 5);
  margin-left: calc(100vw / 70)
  
`;

export default PequenosSlides;