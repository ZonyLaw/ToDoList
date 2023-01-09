// https://www.google.com/search?q=reducer+explained+youtube&oq=reducer+explained+youtube&aqs=chrome..69i57j33i10i160.7079j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ddc25a1,vid:kK_Wqx3RnHk

import './App.css';
import {useState} from 'react';





function App() {

  const [tasks, setTasks] = useState([])
  const [item, setItem] = useState({})
 


  const handleSubmit = (event) =>{
    event.preventDefault();
    setTasks((prev) => [...prev, item])
        
  }
  
  
  const handleChange = (e) => {
    setItem({toggle: false, text: e.target.value})
    console.log(item)
  
  }

  const handleToggle = (tasks, task) => {
    setTasks(tasks.map((t) => (
      (t.text === task.text) ? {...t, toggle: t.toggle===false} : t
    )));

    console.log(tasks)
  }

 
  const handleDelete = (task) => {
    // console.log(tasks)
          
    const newt = tasks.filter((t)=> t !== task )
   
    setTasks(newt)
  }

  return (
    <div className="App">
      <form>
        <label for="taskInput">Enter a task:</label>
        <input type="text" for="taskInput" onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
      </form>


      <ul>
      {tasks.map((task) => (
        <div>
       
          <li className={task.toggle ? 'toggleGreyColor' : 'toggleBlackColor'}>{task.text}</li> 
          <button onClick={() => handleToggle(tasks, task)} >toggle</button> 
          <button onClick={() => handleDelete(task)}>delete</button>

        </div>)

      )}
      </ul>
    
    </div>
  );
}

export default App;
