// https://www.google.com/search?q=reducer+explained+youtube&oq=reducer+explained+youtube&aqs=chrome..69i57j33i10i160.7079j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ddc25a1,vid:kK_Wqx3RnHk

import './App.css';
import {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      return state
  }

}


function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0});
  

  const increment = () => {
    dispatch({type: 'increment'});
  }
  
  const decrement = () => {
    dispatch({type: 'decrement'});
  }
  return (
    <div className="App">

        <p> 
      <button onClick={increment}>+</button>
        {state.count}
      <button onClick={decrement}>-</button>
        
        </p>
        
    
    </div>
  );
}

export default App;
