import React, { useState } from 'react';
import Todo from './Todo';

function ToDoList(props) {
  // const [todoList, setTodoList]= useState([]);
  // const [ inputValue, setInputValue ] = useState("");
  const [todoListState, setTodoListState] = useState({ todos: [], inputValue: ""})

  const handleInputChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    // setInputValue(value);
    setTodoListState( {
      ...todoListState,
      inputValue: value
    })
  }

  const handleButtonClick = () => {
    // setTodoList([...todoList, inputValue]);
    // setInputValue("");
    const { todos } = todoListState;
    setTodoListState({
      todos: [...todos, inputValue],
      inputValue: ""
    })
  }
   
  const{ todos, inputValue } =  todoListState;

  return (
    <div>
      Moja aplikacja Todo
      <input
        name = "Todo Input"
        placeholder = "co bedziesz dzis robić"
        value = { inputValue  }
        onChange = { handleInputChange } 
      />
      <button
        onClick= { handleButtonClick }
      >
        tekst
      </button>
      {todos.map((todo) => (
      <Todo   
        key = { todo }
        todo = { todo }
      />

      ))}
      
    </div>
  )
}

export default ToDoList;