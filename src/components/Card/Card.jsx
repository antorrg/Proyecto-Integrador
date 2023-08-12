import { NavLink, useLocation } from "react-router-dom"; 
import { addFav, removeFav } from "../../redux/actions";
import {connect}from 'react-redux';
import {useState, useEffect} from 'react';



const Card =({character, onClose, addFavorites, removeFavorites, myFavorites})=> {
   const { id, name, image,} = character;
   //console.log(character, onClose);
  
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);

  console.log(character)
   const [IsFav, setIsFav]= useState (false);
   
   const handleFavorite=()=>{
      if(IsFav){
        setIsFav(false);
        removeFavorites(id);
      }
      else{
        setIsFav(true);
        addFavorites(id, name,image);
      }
   }
   
   return (
     <div id={id}>
       {useLocation().pathname === "/home" && <button onClick={() => onClose(id)}>X</button>}
       <button onClick={handleFavorite}>{IsFav ? '❤️' : '🤍'}</button>
       <NavLink to={`/detail/${id}`} ><h2 className="card-name">{name}</h2></NavLink>
       <img src={image} alt="Image not found" />
       
     </div>
   );
 }

function mapDispatchToProps(dispatch){
  return {
     addFavorites: function (character){
        dispatch(addFav(character))
     },
     removeFavorites: function (id){
        dispatch(removeFav(id))
     }
  }
}

function mapStateToProps(state){
    return{
      myFavorites:state.myFavorites
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Card)