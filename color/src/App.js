import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor]=useState('');
  const [error,setError]= useState(false);
  const [list,setList]=useState(  new Values('#f15025').all(10)   );

  const handleSubmit =(e)=>{
    e.preventDefault();
    try{
      const colors= new Values(color).all(10);
      setList(colors);
      console.log(colors);
    }catch(error){
      setError(true);
      console.log(error);
    }
  }
  return (
    <section>
      <div>
        <h2>Color Generator</h2>
        <input type="text" value={color} 
        className={`${error? 'error': null}`}
        placeholder="#f222" onChange={(e)=>setColor(e.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
      </div>
      {list.map((a,index)=>{
        return(
             <SingleColor
          key={index}
          {...a}
          index={index}
          hexColor={a.hex}
        />
        );
      })}
    </section>
    );
}

export default App
