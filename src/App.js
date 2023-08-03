import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav"; 
import { useState } from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";  
import Error from "./components/Error/Error";

const URL_BASE = "https://rickandmortyapi.com/api/character";
const URL_NEW = "https://be-a-rym.up.railway.app/api/character";
const API_KEY= "";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id)=> {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

  //const onClose = () => window.alert("Emulamos que se cierra la card");
  const onClose =(id)=>{
    const characterFiltered = characters.filter((char)=>char.id !== Number(id));
    setCharacters(characterFiltered);
  
  }
 
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path = "/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/Detail/:id" element={<Detail/>}></Route>
        <Route path ="*" element={<Error/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
