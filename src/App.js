// https://www.google.com/search?q=reducer+explained+youtube&oq=reducer+explained+youtube&aqs=chrome..69i57j33i10i160.7079j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4ddc25a1,vid:kK_Wqx3RnHk

import './App.css';
import {useState} from 'react';
import Item from './item';



function App() {

  const [tasks, setTasks] = useState([])
  const [item, setItem] = useState({})
  const [toggle, setToggle] = useState(false)


  const handleSubmit = (event) =>{
    event.preventDefault();
    setTasks((prev) => [...prev, item.text])
        
  }
  
  
  const handleChange = (e) => {
    setItem({toggle: false, text: e.target.value})
    console.log(item)
  
  }

 

  return (
    <div className="App">
      <form>
        <label for="taskInput">Enter a task:</label>
        <input type="text" for="taskInput" onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
      </form>


      <ul>
      {tasks.map((task, index) => 
          <Item id={index} task={task} tasks = {tasks} setTasks={setTasks}/>
      )}
      </ul>
    
    </div>
  );
}

export default App;
