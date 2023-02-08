import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Navbar from './Navbar'
import styled from 'styled-components'
import logo from "../imagens/logo.png"
import { Link, useNavigate} from 'react-router-dom'
import {BiSearchAlt2} from "react-icons/bi"

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [pesquisa, setPesquisa] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pesquisa)
    if (!pesquisa) return;

    navigate(`/pesquisa?q=${pesquisa}`, { replace: true });
    setPesquisa("");
    
  };

  const showNavbar = () => setNavbar(!navbar)

  return (
    <Container>
      <FaBars onClick={showNavbar} />
      {navbar && <Navbar active={setNavbar} />}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Procurar filme' onChange={(e) => setPesquisa(e.target.value)} value={pesquisa}/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>
        <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>   
    </Container>
  )
}

const Container = styled.div`
  height: 50px;
  width:100vw;
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;
  position: fixed;
  z-index:2;
  form{
    display:flex;
    width:1400vw;
    justify-content: right;
    gap:10px;
    input{
      border-radius: 1px;
      border: 0.1px solid white;
      width:175px;
      height:30px;
      align-items:center;
      font-size:10px;
      outline: 0;
      color:white;
      padding-left:5px;
      background-color:#2c374e;
    }
    button{
      font-size:20px;
      background-color: #1A202C; 
      border: 0px solid white;
      border-radius: 10px;
      color: #ffffff90;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg{
        width:20px;
        height:20px;
        line-height:20px;
      }
    }
    button:hover{
      color: #ffffff
    }
  }
  .logo{
    width:100vw;
    img{
        height:50px;
        float:right;
    }
  }
  > svg {
    position: fixed;
    color: #ffffff90;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  svg:hover {
    color:white;
  }
`;

export default Header