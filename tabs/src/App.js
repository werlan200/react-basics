import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [isLoading,SetIsLoading]=useState(true);
  const [people,setPeople]=useState([]);
  const [value,setValue]=useState(0);
  const getItems= async()=>{
    try{
      const response = await fetch(url);
      const users= await response.json();
      setPeople(users);
      SetIsLoading(false);
    } catch (error){
      SetIsLoading(false);
      alert(error);
    }
  };
  useEffect(()=>{
    getItems();
  },[]);

 console.log(people);
 if(isLoading){
   return <div className="section loading">
     Loading...
   </div>;
 }
 const {company,dates,duties,title}= people[value];
  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <article className="jobs-center">
        <div className="btn-container">
          {people.map((a,index)=>{
            return(
              <button key={a.id} type="button" className={`job-btn ${index==value && 'active-btn'}`} onClick={()=>setValue(index)}>{a.company}</button>
            );
          })}
        </div>
        <div className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((za,indexx)=>{
              return(
              <div className="job-desc" key={indexx}>
                <FaAngleDoubleRight className="job-icon"/>
                <p>
                {za}
                </p>
                </div>
              );
            })}
        </div>
      </article>
      <button className="btn-info" type="button">More Info</button>
    </section>
  );
}

export default App;
