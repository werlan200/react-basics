import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaExpeditedssl } from 'react-icons/fa';

const getLocalStorage= ()=>{
  const list= localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return []
  }
};
function App() {

  const [name,setName]=useState('');
  const [isEditing,setIsEditing]=useState(false);
  const [list,setList]=useState( getLocalStorage() );
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState(   { show: false, msg: '', type: '' }    );

  const showAlert=(  show= false, msg= '', type= ''  )=>{
    setAlert({show,msg,type});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      console.log("alert");
    }else if(name && isEditing){
      setList(
        list.map((item)=>{
          if(item.id===editId){
            return {...item, title:name};
          }
          return item;
        })
      );
      showAlert(true,"Item successfully edited", "success");
      setName('');
      setEditId(null);
      setIsEditing(false);
    }else{
      const newItem= {id: new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
    }
  };

  const removeItem =(id)=>{
    setList( list.filter((item)=> item.id!==id) );
  };

  const editItem=(id)=>{
    const spesificItem= list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(spesificItem.title);
  };

  const clearList= ()=>{
    setList([]);
  };

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])
  return (
    <section>
      <form  onSubmit={handleSubmit}>
        {alert.show && <Alert removeAlert={showAlert} {...alert} list={list} />}
        <h3>grocery bud</h3>
        <input 
          type="text"
          placeholder="e.g. eggs"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button type="submit" className="btn-submit">
        {isEditing ? 'Edit': 'Submit'}
        </button>
      </form>
      {list.length>0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="btn-clear" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App
