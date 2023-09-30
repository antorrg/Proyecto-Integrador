import axios from "axios";
import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import style from "./Detail.module.css"
import {URL_NEW} from "../../App";




const Detail =()=>{
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios(`${URL_NEW}character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    return(
        <div className={style.cont}>
        
                <div>
                 <img src={character?.image} alt={character?.name} />
                 </div>
                 <div className={style.text}>
                 <h1> {character?.name}</h1>
                 <h3>Id:     {character.id}</h3>
                 <h3>Status: {character?.status}</h3>
                 <h3>Specie: {character?.species}</h3>
                 <h3>Gender: {character?.gender}</h3>
                 <h3>Origin: {character.origin?.name}</h3>
               </div>
    
        
       
        </div>
    )
}
export default Detail;