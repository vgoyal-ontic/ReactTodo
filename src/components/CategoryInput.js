import {useState} from 'react'
import Button from './Button'
const CategoryInput = ({onSubmit1}) => {


    const [input,setInput]=useState("")


  const handleChange=(e)=>{
    setInput(e.target.value);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    onSubmit1({
      id:Math.floor(10000+Math.random()*10000),
      text:input

    });
    setInput("");

  };

  return (
    <div>

        <form className='category-form' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Add Category' 
        value={input} 
        name="text" 
        className='category-input'
        onChange={handleChange}
        />
        <Button  text="Add Category" key="add-category-btn"/>
        </form>
    </div>
  )
}

export default CategoryInput;
