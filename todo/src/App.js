import React, { useState } from 'react';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/button.css';
import './styles/input.css';
import './styles/todoList.css';
import './styles/todo.css';



import { ToDoList } from './components/ToDoList'


function App() {
  return (
    <div className="App">
      Hello World
      <ToDoList />
    </div>
  )
  // Zadeklaruj nową zm ienną stanu, którą nazwiemy „count”
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <p>Naciśnięto {count} razy</p>
  //        <button onClick={() => setCount(count + 1)}>
  //          Naciśnij mnie
  //        </button>
  //   </div>
  // );

  // const [count2, setNumber] = useState(0);
  // return (
  //   <div className="App">
  //     <div>{count2}</div>
  //     <button onClick = {() => setNumber(count2 + 1)}>Dodaj</button>
  //     <button onClick = {() => setNumber(count2 - 1)}>Odejmij</button>
  //   </div>
  // )

}
export default App;
