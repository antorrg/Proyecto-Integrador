import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav"; 
import { useState } from "react";
import axios from "axios";



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
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
