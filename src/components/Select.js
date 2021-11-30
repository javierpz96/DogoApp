import React, { useState,useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
  {
    id: 1,
    name: "Salchicha",
  },
  {
    id: 2,
    name: "Rotwailer",
  },
];

const Select = ({updateDog}) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error,setError] = useState(null)

  //el use effect se hace después de toda la lectura del componente

  useEffect(()=>{
    updateBreeds()
  },[])


  //Esta funcion va a hacer el llamado a la api
  //La cual retorna la lista de las razas, si tiene exito, va a cargar las razas en nuestro estado "breeds"

  const updateBreeds = () =>{
    getBreeds()
    .then((newBreeds)=>{
        setBreeds(newBreeds)
    })
    .catch((error)=>{
      
      setError('Error al cargar las razas')
    })
  }


  return (
    <>
    <select onChange={(e)=>updateDog(e.target.value)}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {" "}
          {breed.name}
        </option>
      ))}
    </select>

    
    {error && <Error></Error>}
    
    </>
  );
};

export default Select;
