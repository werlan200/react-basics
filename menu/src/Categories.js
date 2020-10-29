import React from 'react';

const Categories = ({categories,filterMenu}) => {
  return (
    <div className="btn-container">
      {categories.map((a,index)=>{
        return(
          <button type="button" className="filter-btn" onClick={()=>filterMenu(a)} key={index}>
            {a}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
