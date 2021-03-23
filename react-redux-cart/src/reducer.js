import {INCREASE, DECREASE} from './actions';

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // console.log('it worked')
    // state.count = state.count -1;
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  
  return state;
}
export default reducer