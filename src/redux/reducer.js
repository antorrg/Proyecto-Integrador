import {ADD_FAV, REMOVE_FAV, FILTER, ORDER}from "./action-types";

const initialState ={
   myFavorites: [],
   allFavorites: []
}

const reducer = (state= initialState, {type, payload})=>{
    switch(type){
        case ADD_FAV:
        return {...state, myFavorites: [...state.myFavorites, payload],
                         allFavorites: [...state.allFavorites, payload]
        }

        case REMOVE_FAV: 
        let newFavorites = state.allFavorites.filter(char =>char.id !==Number(payload));
        return {...state, myFavorites: newFavorites,
                          allFavorites: newFavorites}
        
        
        case FILTER:
            let favoritesFiltered = payload === 'All'? state.allFavorites : state.allFavorites.filter(char=> char.gender === payload)
            return{
                ...state,
                myFavorites: favoritesFiltered}


        case ORDER:
            let favoritesOrdered = state.myFavorites.sort((a, b)=>{
                return payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return{
                ...state,
                myFavorites: favoritesOrdered
            }


        default: return {...state}
    }
}

export default reducer;