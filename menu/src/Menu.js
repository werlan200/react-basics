import React from 'react';

const Menu = ({item}) => {
  return (
    <div className="section-center">
      {item.map((a)=>{
        const {id,title,price,img,desc}=a;
        return(
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo"/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
