import {useState} from 'react'
import TaskInput from './taskInput';
import Todo from './Todo'
const TodoList = () => {

const [todos,setTodos]=useState([]);

    const addTodo=(todo)=>{
        const newTodos=[...todos,todo];
        setTodos(newTodos);

        return;



    }
    const removeTodo=(todo)=>{
        const updatedTodo=todos.filter((todo1)=>{
            if(todo1.id!=todo.id){
                return todo1
            }

        })
        setTodos(updatedTodo);


    }



  return (
    <div>
        <br/>
        <TaskInput onSubmit1={addTodo} />
        <Todo  todos={todos} removeTodo={removeTodo}/>
      
    </div>
  )
}

export default TodoList


