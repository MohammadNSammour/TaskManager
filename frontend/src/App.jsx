import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App(){
const [tasks, setTasks]=useState([]);

const fetchTasks = async() => {
  const res= await fetch("http://localhost:5000/api/");
  const data = await res.json();
  setTasks(data);
};

useEffect(()=>{
  fetchTasks();
},[]);

const addTask = async (title) =>{
  await fetch(`http://localhost:5000/api/`,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({title})
  });
  fetchTasks();
};
const toggleTask = async(id, isDone)=>{
  await fetch(`http://localhost:5000/api/${id}`,{
    method: 'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({isDone:!isDone})
  });
  fetchTasks();
};
const deleteTask = async(id)=>{
  await fetch(`http://localhost:5000/api/${id}`,{
    method: 'DELETE'
  });
  fetchTasks();
};
return(
  <div style={{maxWidth:500,margin:'40 px auto',fontFamily:'sans-serif'}}>
    <h1>Task Manager</h1>
    <TaskForm onAdd={addTask}/>
    <TaskList tasks={tasks} onToggle = {toggleTask} onDelete={deleteTask}/>
  </div>
);
}
export default App;