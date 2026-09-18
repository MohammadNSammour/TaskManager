import {useState} from 'react';
function TaskForm({onAdd}){
    const [title,setTitle]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title.trim()) return;
        onAdd(title);
        setTitle('');
    };
    return(
        <form onSubmit={handleSubmit} style={{display:'flex',gap:8,marginBottom:20}}>
            <input 
            value = {title} 
            onChange={(e)=>setTitle(e.target.value)} 
            placeholder='New task...' 
            style={{flex:1,padding:8}}/>
            <button type="submit">Add</button>
        </form>
    );
}
export default TaskForm;