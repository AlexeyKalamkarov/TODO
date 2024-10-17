import Trash from '../../image/task/Trash.svg';
import '../../components/Tasks/style.css';
import AddTask from '../../components/AddTask/AddTask';
const Task = ({note}) => {
    return ( 
        <div className="new-task">
            <input type="text" value={note} id='newTask'/>
            <button><img src={Trash} alt="" /></button>
        </div>
     );
}
 
export default Task;