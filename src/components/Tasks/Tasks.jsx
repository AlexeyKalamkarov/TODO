// import Task from "../Task/Task";
// import { useState } from "react";
import Trash from '../../image/task/Trash.svg';
import '../Tasks/style.css'

const Tasks = ({task, deleteTodo}) => {
    return ( 
            <div className="task">
                    <input type="text" defaultValue={task.task} id='newTask'/>
                    <button onClick={()=>deleteTodo(task.id)}><img src={Trash} alt="" /></button>
            </div>
     );
}
 
export default Tasks;