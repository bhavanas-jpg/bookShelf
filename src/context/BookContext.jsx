import { createContext, useContext, useState } from "react";
import {books} from "../data/books"

export const BookContext = createContext(null);

export const BookProvider = ({children})=>{

   //all hooks
   const [allBooks, setAllBooks] = useState(books);
   const [searchQuery, setSearchQuery] = useState("");

  const categoryList = ["currently_reading", "want_to_read", "read"];
  const formatCategory =(name)=> name.split("_").join(" ");

  const getDataByCategory =(selectedCategory)=>{
    return allBooks.filter(({category})=> category === selectedCategory)
  }
  const updateBookCategory =(bookId, categoryValue)=>{
  const updateBooks = allBooks.map((book)=> book.id === bookId ? {...book, category: categoryValue}
   : book)
   setAllBooks(updateBooks)
  }
    return(
        <BookContext.Provider value={{
            categoryList, 
            allBooks,
            searchQuery,
            setAllBooks,
            setSearchQuery,
            getDataByCategory,
            formatCategory,
            updateBookCategory
        }}>
            {children}
        </BookContext.Provider>
    )
}

export const useBooks =()=> useContext(BookContext);