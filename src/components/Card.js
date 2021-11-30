import React from "react";
import Spinner from "./Spinner";

const Card = ({ dog, updateDog, loading,getDog}) => {
  if (loading) return <Spinner></Spinner>;

  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="dog"></img>

      <p>Name: {dog.breed.name}</p>
      <p>Lifespan: {dog.breed.life_span}</p>
      <p>Temperament: {dog.breed.temperament}</p>

      
    </div>
  );
};

export default Card;
