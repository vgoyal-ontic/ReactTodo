import React from 'react'
import TodoList from './TodoList'

const Category = ({categories,removeCategory}) => {
  
    return categories.map((category)=>{

        return (

        <div key={category.index} className='category' >
            <br/>
        <p >{category.text}</p>
        <button onClick={(e)=>removeCategory(category)} >Delete</button>
        <TodoList/>

    
        </div>)
      })
}

export default Category
