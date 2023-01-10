import React from 'react'

function TODOS({todo}) {
  return (
    <div>
        <p style={{ color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</p>
        <button>toogle</button>
        <button>delete</button>
    </div>
)}

export default TODOS
