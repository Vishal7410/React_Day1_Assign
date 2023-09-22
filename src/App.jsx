import { useState } from 'react'
import Person from './Person.jsx';
import Button from './Button.jsx';
import Header from './Header.jsx';
import List from './List.jsx';

import './App.css'

function App() {
  

  return (
   <>
   <Header title = "Welcome to my website!"/>
   <Person name="John" age="30" />
   <Button text = "Clicke me!" onClick={() =>console.log("Button clicked")}/>
   
   <List items = {['apple','Mango','Orange']}/>
   </>
  )
}

export default App
