import React from 'react';

import './App.css';
import Item from './Item';

const List = (props) => {
  const {base, onClick} = props; 

 const items = base.map(item => (
   <Item
   key = {item.id}
   {...item}
   onClick = {onClick}
   />
 )) 

  return (
    <ul>
      {items}
    </ul>
  );
}

export default List;