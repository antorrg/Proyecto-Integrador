import "./App.css";
import axios from "axios";
import { useState } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Form from "./components/Form/Form"; 
import Nav from "./components/Nav/Nav"; 
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";  
import About from "./components/About/About";


const URL_BASE = "https://rickandmortyapi.com/api/character";
const URL_NEW = "https://be-a-rym.up.railway.app/api/character";
const API_KEY= "";

function App() {
  const location = useLocation();
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
      {
        location.pathname !== '/' ? <Nav onSearch={onSearch} /> : null
      }
      <Routes>
        <Route path ="/" element={<Form/>}></Route>
        <Route path = "/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/Detail/:id" element={<Detail/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
