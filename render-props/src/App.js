import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal'

function App() {
  return (
    <div className="App">
      Hello World
      <Modal>
        {(value) => <div>Modal, {value} </div>}
      </Modal> 
    </div>

  );
}

export default App;
