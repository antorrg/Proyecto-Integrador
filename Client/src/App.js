import "./App.css";

import axios from "axios";
import { useState, useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
//Importación de componentes:
import Form from "./components/Form/Form"; 
import Nav from "./components/Nav/Nav"; 
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";  
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites"

const URL_BASE = "https://rickandmortyapi.com/api/character";
const URL_NEW = "https://be-a-rym.up.railway.app/api/character";
const API_KEY= "";
const email = "abs@gmail.com";
const password = "123456";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const login = (userData) => {
    if(email === userData.email && password === userData.password){
      setAccess(true);
      navigate("/home");
    
    }
  }

 
  useEffect(() => {
    !access && navigate('/');
   },[access]);
  
 
 const onSearch = (id) => {
  if (isNaN(id)) {
    alert("Por favor, ingresa un número válido como ID.");
    return;
  }

  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const characterExists = characters.some((character) => character.id === data.id);
      if (data.id) {
        if (characterExists) {
          alert("Este personaje ya se encuentra en la lista.");
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      } else {
        alert(`¡No hay personajes con ese ID!`);
      }
    })
    .catch((error) => {
      alert('Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.');
    });
};
 

  const onClose =(id)=>{
    const characterFiltered = characters.filter((char)=>char.id !== Number(id));
    setCharacters(characterFiltered);
  
  }
 
  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav onSearch={onSearch} setAccess = {setAccess} /> 
      }
      <Routes>
        <Route path ="/" element={<Form login= {login}/>}></Route>
        <Route path = "/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/Detail/:id" element={<Detail/>}></Route>
        <Route path ="/Favorites" element = {<Favorites/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
