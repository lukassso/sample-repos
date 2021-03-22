import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux';

// store.getState

// initial store
const initialStore = {
  count: 78
}

// reducer
function reducer(state, action) {
  console.log({state, action});
  if(action.type === 'DECREASE'){
    // console.log('it worked')
    state.count = state.count -1;
    return {count:state.count -1};
  }
  return state; 
}

const store = createStore(reducer, initialStore);
console.log(store)
store.dispatch({type:'DECREASE'})

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
