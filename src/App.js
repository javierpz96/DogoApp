import React,{useState,useEffect} from 'react';
import './App.css';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';



const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "",
    life_span:"",
    temperament:"",
  }
}


function App() {

  const [dog,setDog] = useState(initialDog)
  const [loading,setLoading] = useState(false)


  useEffect(()=>{
    updateDog(0)
  },[])


  const updateDog = (breedId) =>{
    setLoading(true)
    getDog(breedId)
    .then((newDog)=>{
      setDog(newDog)
      setLoading(false)
      
    })
  }
  


  return (
    <div className="app">
        <Select updateDog={updateDog}></Select>

        <Card getdog={getDog} dog={dog} updateDog={updateDog} loading={loading}></Card>

        
        
    </div>
  );
}

export default App;
