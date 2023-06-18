import React from 'react'
import { useBooks } from '../context/BookContext';
import BookCard from './BookCard';

const Shelve = ({category}) => {
    const {getDataByCategory, formatCategory} = useBooks();
    const shelveData = getDataByCategory(category);
    const categoryName = formatCategory(category);


  return (
    <div className="shelve container">
       <h2 className="shelve__heading">{categoryName}</h2>
       <main className="shelve__books">
        {shelveData.map((data)=>(
            <BookCard  bookData={data} key={data.id}/>
        ))}
        </main> 
        
    </div>
  )
}

export default Shelve