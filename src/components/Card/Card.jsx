import { NavLink } from "react-router-dom"; 

export default function Card({ character, onClose }) {
   const { id, name, species, gender, origin, image, status } = character;
   console.log(character, onClose);
   return (
     <div id={id}>
       <button onClick={()=> onClose(id)}>X</button>
       <NavLink to={`/detail/${id}`} ><h2 className="card-name">{name}</h2></NavLink>
       {/*<h2>{status}</h2>
       <h2>{species}</h2>
       <h2>{gender}</h2>
       <h2>{origin.name}</h2>*/}
       <img src={image} alt="Not found" />
       
     </div>
   );
 }