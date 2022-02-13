
import { useState } from 'react';
import Button from './Button';
const TaskInput = ({onSubmit1}) => {
  
  const [input,setInput]=useState("")


  const handleChange=(e)=>{
    setInput(e.target.value);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    onSubmit1({
      id:Math.floor(Math.random()*1000),
      text:input

    });
    setInput("");

  };

  return (


    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Add Task' 
        value={input} 
        name="text" 
        className='todo-input'
        onChange={handleChange}
        />
        <Button  text="Add Task" key="add-task-btn"/>
      </form>

        
    </div>
  )
}

export default TaskInput

