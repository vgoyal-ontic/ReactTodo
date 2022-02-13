import Button from "./Button"

const Todo = ({todos,removeTodo}) => {
    


  return todos.map((todo)=>{

    return (
    <div key={todo.index} >
    <p >{todo.text}</p>
    <button onClick={(e)=>removeTodo(todo)} >Delete</button>

    </div>)
  })
}
export default Todo
