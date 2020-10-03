import React from 'react';

import './App.css';

const Item = (props) => {
  const {lastName, id, onClick} = props;
  
  return (
    
    <li
    onClick = { () => onClick(id) } 
    className = "lastName"
    >
    {lastName}
    </li>
  );
}

export default Item;