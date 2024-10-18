import Header from "./components/Header/Header";
import '../src/main.css';
import {AddTask} from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import { useState } from "react";
import {EditTask} from '../src/components/EditForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

// import { isEditable } from "@testing-library/user-event/dist/utils";


function App() {
    const [todos, setTodos] = useState([]);
    // const id = new Date();//берем в качестве id текушие дату и время в 

const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    
}
const deleteTodo = (id) => {
    setTodos((prvTodos)=> 
        prvTodos.filter(todo => todo.id !== id))
}
const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
}
const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
}
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <AddTask addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTask key={index} editTodo={editTask} task={todo}/>
                ) : (
                <Tasks task={todo} key={index} id={todo.id} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}
        </div>
    </div>
  );
}

export default App;
