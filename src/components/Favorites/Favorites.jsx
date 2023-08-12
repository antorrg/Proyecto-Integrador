//import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'; 

const Favorites = ({myFavorites}) => {
  console.log(myFavorites);
  return (   
    <div> 
      {myFavorites?.map((favorite) => (
        <Card
          key={favorite.id}
          image={favorite.image}
          character= {favorite}
        />
      ))}
    </div>
  );
 
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
