import '../AddTask/style.css';
import React from 'react'
import { useState } from 'react';
export const AddTask = ({addTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
        // addTodo(inputValue)
    }
    // function handleChange(e){
    //     setInputValue(e.target.value)
    // }
    function handleSubmit(e){
        e.preventDefault()
        addTodo(inputValue)
        // setTodos([...todos, inputValue])
        setInputValue('')
    }

    return ( 
        <section className="addTask">
            <div className="addTask-div">
                <input type="text" className="input-addTask" id='AddTaskInput' value={inputValue} onChange={handleChange}/>
                <button type="submit" className="addTask-btn" id="AddTaskBtn" onClick={handleSubmit}>Добавить</button>
            </div>
        </section>
     );
}
