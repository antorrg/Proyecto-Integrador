import {ADD_FAV, REMOVE_FAV, FILTER,ORDER}from "./action-types";
import axios from "axios";
import {URL_NEW} from "../App";


export const addFav = (character) => async (dispatch) => {
   try {
     const endpoint = `${URL_NEW}fav`;
     const { data } = await axios.post(endpoint, character);
 
     dispatch({
       type: ADD_FAV,
       payload: data,
     });
   } catch (error) {
     alert("Could not add the character selected");
   }
 };

/*export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };*/

// export const addFav = (character)=> {
//     return {type: ADD_FAV, payload: (character)}
// };


export const removeFav = (id) => {
   const endpoint = `${URL_NEW}fav/` + id;
   return async (dispatch) => {
     try {
       const { data } = await axios.delete(endpoint);
 
       return dispatch({
         type: REMOVE_FAV,
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };
 
/*export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };*/


// export const removeFav = (id)=> {
//     return {type: REMOVE_FAV, payload:(id)}
// };

export const filterFav = (gender)=>{
    return {
        type: FILTER,
        payload: (gender)
    }
}

export const orderFav = (order) => {
    return{
        type: ORDER,
        payload:(order)
    }
}