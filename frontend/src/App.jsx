import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const API_URL = import.meta.env.VITE_API_URL;
function App(){
const [tasks, setTasks]=useState([]);

const fetchTasks = async() => {
  //const res= await fetch("http://localhost:5000/api/");
  const res= await fetch(`${API_URL}`/*/api/`*/);
  const data = await res.json();
  setTasks(data);
};

useEffect(()=>{
  fetchTasks();
},[]);

const addTask = async (title) =>{
  await fetch(/*`http://localhost:5000*/`${API_URL}/`/*api/`*/,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({title})
  });
  fetchTasks();
};
const toggleTask = async(id, isDone)=>{
  await fetch(/*`http://localhost:5000*/`${API_URL}/${id}`/*/api/${id}`*/,{
    method: 'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({isDone:!isDone})
  });
  fetchTasks();
};
const deleteTask = async(id)=>{
  await fetch(/*`http://localhost:5000*/`${API_URL}/api/${id}`,{
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