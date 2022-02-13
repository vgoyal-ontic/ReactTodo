import Category from "./Category";
import CategoryInput from "./CategoryInput";
import { useState } from "react";
const CategoryList = () => {

    const [categories,setCategories]=useState([]);

    const addCategory=(category)=>{
        const newCategories=[...categories,category];
        setCategories(newCategories);

        return;



    }
    const removeCategory=(category)=>{
        const updatedCategory=categories.filter((category1)=>{
            if(category1.id!=category.id){
                return category1
            }

        })
        setCategories(updatedCategory);


    }



  return (
    <div>
        
        <CategoryInput onSubmit1={addCategory} />
        <Category  categories={categories} removeCategory={removeCategory}/>
      
    </div>
  )
}
export default CategoryList;
