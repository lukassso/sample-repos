import React, { useState } from 'react';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
         <button onClick={() => setCount(count + 1)}>
           Naciśnij mnie
         </button>
    </div>
  );
}
export default App;
