import React from 'react'
import { useBooks } from '../context/BookContext';

const CategorySelector = ({selectedValue, categoryId, setShowCategory}) => {
    const {categoryList, updateBookCategory, formatCategory} = useBooks();

  return (
    <div>
        <ul className="categorySelector">
            {[...categoryList, "none"].map((category)=>(
             <li 
             key={category} 
             value={category}
             onClick={()=>{
                updateBookCategory(categoryId, category);
                setShowCategory(false)
             }}
             
             className={`${selectedValue === category ? "selectedCategory" : ""}`}
             >
                {formatCategory(category)}
             </li>
            ))

            }
        </ul>
    </div>
  )
}

export default CategorySelector