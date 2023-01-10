// https://www.google.com/search?q=reducer+explained+youtube&oq=reducer+explained+youtube&aqs=chrome..69i57j33i10i160.7079j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ddc25a1,vid:kK_Wqx3RnHk

import './App.css';
import {useReducer, useState} from 'react';
import TODOS from './todos';

const ACTIONS = {
  ADD_TODO: 'add-toDo',
  TOGGLE_TODO: 'toggle-todo'
}


const reducer = (todos, action) =>{
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO: 
      return [...todos, toggleToDo(action.payload.name)]

  }
}

const newToDo = (name) => {
  return{
    id: Date.now(),
    name: name,
    complete: false
  }
}

const toggleToDo = () => {
  return{


  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

 
  const handleChange = (e) => {
    setName(e.target.value)

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( {type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('')
  }



  return (
    <div className="App">

        <form  onSubmit={handleSubmit}>
          <label>Enter a task</label>
          <input onChange={handleChange} type='text' value={name} placeholder="Enter task"/>
          
        </form>
        
        
        {todos.map((todo) => {
          return <TODOS key={todo.id} todo={todo}/>
        })}
    
    </div>
  );
}

export default App;
