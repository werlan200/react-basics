import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [showButton,setShowButton]=useState(true);
  return (
    <article className="question">
      <div className="header">
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setShowButton(!showButton)}>
          {showButton ? <AiOutlinePlus/>:<AiOutlineMinus/>}
        </button>       
      </div>
      {!showButton===true ? <p>{info}</p>: null}
    </article>
  );
};

export default Question;
