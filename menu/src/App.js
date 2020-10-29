import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCatagories=['all', ...new Set(items.map((eItem)=>eItem.category))];

function App() {
  const [item,setItem]=useState(items);
  const [categories,setCategories]=useState(allCatagories);

  const filterMenu = (category)=>{
    if(category==='all'){
      setItem(items);
      return;
    }
    const newItems=items.filter((a)=>a.category===category);
    setItem(newItems);
  };
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>     
        <Categories categories={categories} filterMenu={filterMenu} />               
        <Menu item={item}/>
      </section>
    </main>
  );
}

export default App;
