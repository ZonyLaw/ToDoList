// https://www.google.com/search?q=reducer+explained+youtube&oq=reducer+explained+youtube&aqs=chrome..69i57j33i10i160.7079j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ddc25a1,vid:kK_Wqx3RnHk

import './App.css';
import {useReducer, useState} from 'react';
import TODOS from './todos';

export const ACTIONS = {
  ADD_TODO: 'add-toDo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}


const reducer = (todos, action) =>{
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
          return todo
      })
    case ACTIONS.DELETE_TODO:
      return  todos.filter( todo => (
        todo.id !== action.payload.id)
      )
    default:
      return todos

  }
}

const newToDo = (name) => {
  return{
    id: Date.now(),
    name: name,
    complete: false
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
          return <TODOS key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
    
    </div>
  );
}

export default App;
