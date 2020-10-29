import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [textNum,setTextNum]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit= (e)=>{
    e.preventDefault();
    let amount = parseInt(textNum);
    if(amount>=data.length){
      amount=data.length-1;
    }else if (amount<=0){
      amount=1;
    }
    setText(data.slice(0,amount));
  };

  return (
    
      <section>
        <h2>tired of boring lorem ipsum?</h2>
        <form >
          <label htmlFor="number">Paragraphs : </label>
          <input 
          type="number"
          name="number"
          id="number"
          value={textNum}
          onChange={(e)=> setTextNum(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>Generate</button>
        </form>
      {text.map((a,index)=>{
        return(
        <p key={index}>{a}</p>
        );
      })}
      </section>
    
  );
}

export default App;
