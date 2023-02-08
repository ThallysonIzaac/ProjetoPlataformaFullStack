import React, { useState, useEffect} from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY } from '../utils/constantes';
import { Link} from 'react-router-dom';


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

const GrandeSlider = () => {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    
    return (
        <CarouselContainer >
            
            <Slider {...settings} >
            {movies.map(movie => (
              <Link to={`/filmeunico/${movie.id}`}>               
                <div key={movie.id} >
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                    <h1 className='nome-filme'>{movie.title}</h1>
                </div>
              </Link>
            ))}
            </Slider>
            
        </CarouselContainer>
);
};

const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top:50px;
  position:absolute;
  background-color: #1A202C; 
  .slick-dots li{
    margin:0px;
  }
  .slick-dots button::before{
    font-size:10px;
    opacity:.60;
  }
  .slick-dots:hover{
    color:white;
  }
  .nome-filme{
    font-size:20px;
    text-align:center;
    color:white;
  }
  ul{
    position:relative;
    top:-52px;
  }
  .slick-prev::before{
    color:black;
    position: absolute;
    left: 30px;
    top:-30px;
    font-size:40px;
  }
  .slick-next::before{
    color:black;
    position:absolute;
    top:-30px;
    left:-50px;
    font-size:40px;
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
  width: 100%;
  height: 200px;
`;


export default GrandeSlider;
