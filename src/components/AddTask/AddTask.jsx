import '../AddTask/style.css';
import React from 'react'
import { useState } from 'react';


export const AddTask = ({addTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            addTodo(inputValue)
            setInputValue('')
            }
      };

    function handleSubmit(e){
        addTodo(inputValue)
        
        setInputValue('')
    }

    return ( 
        <section className="addTask">
            <div className="addTask-div">
                <input type="text" className="input-addTask" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
                <button type="submit" className="addTask-btn" onClick={handleSubmit}>Добавить</button>
            </div>
        </section>
     );
}
