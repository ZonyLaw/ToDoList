import React from 'react'



function Item({id, task,tasks, setTasks}) {


    const handleToggle = () => {
 
    }
  
    const handleDelete = () => {
      console.log(tasks)
            
      const newt = tasks.filter((t)=> t !== task )
      setTasks(newt)
    }
  return (
    <div>
     
        <li >{task}</li> 
        <button onClick={handleToggle} tt={task}>toggle</button> 
        <button onClick={handleDelete}>delete</button>
 
    </div>
  )
}

export default Item



