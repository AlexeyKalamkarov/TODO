import Trash from '../../image/task/Trash.svg';
import Edit from '../../image/task/edit.svg';
import '../Tasks/style.css'

const Tasks = ({task, deleteTodo, editTodo}) => {
    return ( 
            <div className="task">
                    <p className='p-date'>{task.date.toLocaleString()}</p>
                    <p>{task.task}</p>
                    <button onClick={() => deleteTodo(task.id)}><img src={Trash} alt="" /></button>
                    <button className='edit-btn' onClick={() => editTodo(task.id)}><img src={Edit} alt="" /></button>
            </div>
     );
}
 
export default Tasks;