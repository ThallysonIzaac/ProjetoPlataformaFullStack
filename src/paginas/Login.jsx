import React, { useState } from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import styled from 'styled-components';
import {firebaseAuth} from "../utils/firebase-config";
import ImagemDeFundo from '../componentes/ImagemDeFundo';
import logo from '../imagens/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogIn = async ()=>{
        try{
            await signInWithEmailAndPassword(firebaseAuth,email,password)
        }catch(error){
            console.log(error.code)
        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/");
    })

  return (
    <Container>
      <ImagemDeFundo/>
        <div className="first-header">
          <button onClick={()=>navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Entre":"Inscreva-se"}
          </button>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>   
        </div>
        <div className="content">
          <form className='formulario'>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />             
          </form>
          <br/>
          <button onClick={handleLogIn}>Entrar</button>
        </div>
        <footer>
          <h5>Dúvidas? Ligue 0000 000 0000</h5>
          <br/>
          <div className="creditos">
            <h6><a href="https://www.freepik.com/free-photo/rows-red-seats-theater_3532061.htm#query=movie%20background&position=1&from_view=keyword">Image by rawpixel.com</a> on Freepik</h6>
            <h6><a target="_blank" href="https://icons8.com/icon/CurunfN7unTu/movie-theater">Movie Theater</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></h6>
          </div>
        </footer>
    </Container>
  )
}


const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-height:250px;
  height: 100vh;
  width: 100vw;
  .first-header{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    button{
      padding:0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.900);
      border:black solid 3px;
      cursor:pointer;
      border-radius:0.13rem;
      font-weight:bolder;
      font-size:1.05rem;
      color:white;
      margin-left: 1rem;
    }
    .logo{
      margin-right: 1rem;
      img{
        height:50px;
        width:auto;
      }
    }
  }
  .content{
    position: absolute;
    top: 150px;
    left: 25vw;
    width:50vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.700);
    padding:1rem;
    .formulario{
      display:flex;
      flex-direction:column;
      input{
        padding:0.5rem 1rem;
        border:white solid 3px;
        font-weight:bolder;
        font-size:1.05rem;
      }
    } 
    button{
      padding:0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.900);
      border:white solid 3px;
      cursor:pointer;
      font-weight:bolder;
      font-size:1.05rem;
      color:white;
    } 
  }
  footer{
    height:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.900);
    h5{
      color:white;
    }
    .creditos{
      display:flex;
      flex-direction:column;
      align-items:center;

    }
  }

`;