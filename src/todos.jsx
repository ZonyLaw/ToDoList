import React from 'react'
import { ACTIONS } from './App.js'


function TODOS({ todo, dispatch }) {
  return (
    <div>
        <p style={{ color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</p>
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>toogle</button>
        <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>delete</button>
    </div>
)}

export default TODOS
