import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [cat, setCat] = useState("");
  const [words, setWords] = useState("");

  const CATAAS_URL = "https://cataas.com/";
  return (

    <div className="App">
      <input
        type='text'
        id='cat-says'
        name='cat-says'
        onChange={(e)=>setWords(e.target.value)}/>
      <br/>
      <button onClick={getCat}>GIMME CAT</button>
      <br/>
      <br/>
      <img src={cat}/>
    </div>
  );

  function getCat(){
    setCat(CATAAS_URL+'cat/says/'+words+'?_=' + new Date().getTime());
    console.log(cat)
  }
}
