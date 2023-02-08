import React, {useState} from 'react';
import styled from 'styled-components';
import ImagemDeFundo from '../componentes/ImagemDeFundo';
import logo from '../imagens/logo.png';
import { useNavigate } from 'react-router-dom';
import {firebaseAuth} from "../utils/firebase-config";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

export default function Signup(props) {  
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email:"",
        password:"",
    })

    const handleSignIn = async ()=>{
        try{
            const {email,password} = formValues;

            await createUserWithEmailAndPassword(firebaseAuth,email,password)
        }catch(err){
            console.log(err)
        }
    }
 

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/");
    })

  
  return (
    <Container>
      <ImagemDeFundo/>
        <div className="first-header">
          <button onClick={()=>navigate(props.login ? "/signup" : "/login")}>
            {props.login ? "Entre":"Conectar-se"}
          </button>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>   
        </div>
        <div className="content">
          <h1>O melhor serviço de streaming para os que não aceitam assistir qualquer coisa</h1>
          <br/>
          <h6>Faça o seu cadastro</h6>
          <form className='formulario'>
            <input 
            className='email' 
            type="email" 
            placeholder='Digite seu e-mail' 
            name='email'  
            value={formValues.email} 
            onChange={
              (e)=>setFormValues({...formValues,[e.target.name]:e.target.value})
              }/>
            <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            value={formValues.password} 
            onChange={
              (e)=>setFormValues({...formValues,[e.target.name]:e.target.value})
              }/>
          </form>
          <br/>
          <button onClick={handleSignIn}>Confirmar</button>
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
    top: 100px;
    left: 15vw;
    width:70vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.700);
    padding:1rem;
    h1{
      text-align:center;
      width:50vw;
      color:white;
      line-height:30px;
    }
    h6{
      color:white;
    }
    .formulario{
      display:flex;
      .email{   
      }
      input{
        padding:0.5rem 1rem;
        border:white solid 3px;
        font-weight:bolder;
        font-size:1.05rem;
        &:focus{
          outline:none;
      }
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