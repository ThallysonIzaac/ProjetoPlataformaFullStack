import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmeUnico from "./paginas/FilmeUnico";
import Login from "./paginas/Login";
import Plataforma from "./paginas/Plataforma";
import Signup from "./paginas/Signup";
import Pesquisa from "./paginas/Pesquisa";
import Play from "./paginas/Play";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Plataforma/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/play/:id" element={<Play/>}/>
        <Route path="/pesquisa" element={<Pesquisa/>}/>
        <Route  path="/filmeunico/:id" element={<FilmeUnico/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

