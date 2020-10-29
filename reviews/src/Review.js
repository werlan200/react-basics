import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index,setIndex]=useState(0);
  const {id,name,job,image,text}=people[index];
  const checkNumber =(number)=>{
    if(number=== people.length){
      return 0;
    }else if(number <0){
      return people.length-1;
    }else{
      return number;
    }
  };
  const nextIndex = () =>{
    setIndex((index)=>{
      return checkNumber(index+1);
    });
  };
  const prevIndex=()=>{
    setIndex((index)=>{
      return checkNumber(index-1);
    });
  };
  const randIndex=()=>{
    setIndex((index)=>{
      let rand=Math.floor(Math.random()*people.length);
      while(index===rand){
        rand=Math.floor(Math.random()*people.length);
      }
      return rand;
    })
  };

  return (
    <>
          <section className="section" key={id}>
            <div className="imgcontainer">
              <img src={image} alt={name}/>
              <span className="quoteicon"><FaQuoteRight/></span>
            </div>
              <div className="personName">
                 <h4 className="name">{name}</h4>
                  <h6 className="job">{job}</h6>
              </div>
              <div className="infoo">
                  <p>{text}</p>
              </div>
              <div className="buttonarea">
                  <div className="buttonAreaNext">
                    <button className="btnnext" onClick={prevIndex}><FaChevronLeft/></button>
                    <button className="btnnext" onClick={nextIndex}><FaChevronRight/></button>
                  </div>
                  <button className="btnrandom" onClick={randIndex}>Surprise Me</button>
              </div>
          </section>
    </>
  );
};

export default Review;
