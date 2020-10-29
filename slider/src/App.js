import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const[people,setPeople]=useState(data);
  const [index,setIndex]=useState(0);

  useEffect(() => {
    let lastIndex= people.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    } 
    
  }, [index,people])

  useEffect(() => {
    let slider= setInterval(()=>{
      setIndex(index+1);
    },5000);
    return () => {
      clearInterval(slider);
    }
  }, [index])
  return (
    <section>
      <div className="title">
      <h2><span>/</span>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person,personIndex)=>{
          const {id,image,title,quote,name}=person;
          let position="nextSlide";
          if(personIndex===index){
            position="activeSlide";
          } 
          if(
            personIndex===index-1 ||
            (index===0 && personIndex===people.length-1)
          ){
            position="lastSlide";
          }
          return(
            <article key={id} className={position}>
              <img src={image} alt={title} />
              <h3>{name}</h3>
              <h4 className="ptitle">{title}</h4>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" type="button" onClick={()=>setIndex(index-1)}><FiChevronLeft className="btn-icon" /></button>
        <button className="next" type="button" onClick={()=>setIndex(index+1)}><FiChevronRight className="btn-icon" /></button>
      </div>
    </section>
  );
}

export default App;
