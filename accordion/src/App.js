import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [showContent,setShowContent]=useState(data);
  return (
  <main>
    <div className="container">     
      <h3>Questions And Answers About Login</h3>
      <div className="right-content">
        {showContent.map((question)=>{
          return (
            <SingleQuestion key={question.id} {...question}  />
          );
        })}
      </div>
    </div>
  </main>
  );
}

export default App;
