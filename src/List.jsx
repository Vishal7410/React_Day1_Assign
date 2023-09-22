//Create a component named "List" that takes one 
//prop - "items". The component should display an 
//unordered list element with the given list items.


import React from 'react'

const List = (props) => {
  
   const listItems = props.items.map((items) =>
   <li key={items}>{items}</li>
   );
   return <ul>{listItems}</ul> 
}
export default List