import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ( {items,removeItem ,editItem} ) => {
  
  return (
    <div className="grocery-list">
      {items.map((item)=>{
        const {id,title}=item;
        return(
          <div key={id}>
            <p>{title}</p>
            <button className="btn-edit" onClick={()=>editItem(id)}><FaEdit /></button>
            <button className="btn-delete" onClick={()=>removeItem(id)}><FaTrash /></button>
          </div>
        );
      })}
    </div>
  );
}

export default List
