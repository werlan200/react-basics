import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert]= useState(false);

  const bcg=rgb.join(",");
  const hex= `#${hexColor}`;
  const clickHandler=()=>{
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };
  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setAlert(false);
    },3000)
    return ()=>{
      clearTimeout(timeout);
    }
  },[alert])
  return (
    <div style={{ background:`rgb(${bcg})`}}  onClick={clickHandler} className={`${index>10 ? "area lighter":"area darker"}`}>
      <p>{hex}</p>
      <p>{weight}%</p>
      {alert && <p>COPIED TO CLIPBOARD!</p>}
    </div>
  );
}

export default SingleColor
