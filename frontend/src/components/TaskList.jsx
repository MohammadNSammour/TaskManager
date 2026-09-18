function TaskList({tasks,onToggle,onDelete}){
    if(tasks.length===0) return <p>No tasks yet.</p>;
    return(
        <ul style={{listStyle:'none',padding:0}}>
            {
                tasks.map((task)=>{
                    return <li key = {task.id} style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
                        <input type = "checkbox" checked={task.isDone} onChange={()=>onToggle(task.id,task.isDone)}
                        /> 
                        <span style={{textDecoration:task.isDone?'line-through':'none',flex:1}}>
                            {task.title}
                        </span>
                        <button onClick={()=>onDelete(task.id)}>Delete</button>
                    </li>
})
            }
        </ul>
    );
}
export default TaskList;
