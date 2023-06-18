import React, { useState } from 'react';
import {AiOutlineCaretDown} from "react-icons/ai"
import CategorySelector from './CategorySelector';

const BookCard = ({bookData}) => {
    const [showCategory, setShowCategory] = useState(false);
  return (
    <div className="bookcard">
        <div className="bookcard__main">
            <img 
            className="bookcard__image"
            src={bookData.image}
             alt={bookData.title} />
         <div
         className="category__box"
         onClick={()=> setShowCategory(!showCategory) }
         >
            <AiOutlineCaretDown />
         </div>
         {
            showCategory && (
                <CategorySelector
                selectedValue ={bookData.category}
                categoryId ={bookData.id}
                setShowCategory={setShowCategory}
                />
            )
         }
         </div>
        <h3 className="bookcard__title">{bookData.title}</h3>
        <h4 className="bookcard__subTitle">{bookData.author}</h4>
     


    </div>
  )
}

export default BookCard