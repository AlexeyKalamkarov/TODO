import '../components/AddTask/style.css';
import React from 'react'
import { useState } from 'react';


export const EditTask = ({editTodo, task}) => {

    const [inputValue, setInputValue] = useState(task.task);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            editTodo(inputValue, task.id)
            setInputValue('')
            }
      };

    function handleSubmit(e){
        editTodo(inputValue, task.id)
        setInputValue('')
    }

    return ( 
        <section className="addTask">
            <div className="addTask-div">
                <input type="text" className="input-addTask" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Edit TODO'/>
                <button type="submit" className="addTask-btn" onClick={handleSubmit}>Обновить</button>
            </div>
        </section>
     );
}
