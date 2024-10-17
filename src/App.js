import Header from "./components/Header/Header";
import '../src/main.css';
import {AddTask} from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import { useState } from "react";
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
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <AddTask addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Tasks task={todo} key={index} id={todo.id} deleteTodo={deleteTodo} />
            ))}
        </div>
    </div>
  );
}

export default App;
