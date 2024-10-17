import Trash from '../../image/task/Trash.svg';
import '../Tasks/style.css'

const Tasks = ({task, deleteTodo}) => {
    return ( 
            <div className="task">
                    <p>{task.task}</p>
                    <button onClick={() => deleteTodo(task.id)}><img src={Trash} alt="" /></button>
            </div>
     );
}
 
export default Tasks;