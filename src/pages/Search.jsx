import React, { useEffect } from 'react'
import { useBooks } from '../context/BookContext';
import BookCard from "../components/BookCard"
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const {allBooks, searchQuery, setSearchQuery} = useBooks();
  const navigate = useNavigate();

  

  const filteredBooks = searchQuery.length === 0 ? [] :
  allBooks.filter(({author,title}) => title.toLowerCase().includes(searchQuery.toLowerCase())
  || author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container search-main">
      <div class="search-content">
        <div>
        <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
       
      <input 
      onChange={(e)=>
        {
       
          setSearchQuery(e.target.value)
        }
        }
      type="search"
      placeholder='Search Books' />
      </div>
    

      <div>
        {filteredBooks.length === 0 && <h2 className="heading">No Books Found</h2>}
        {filteredBooks.map((book)=>(
          <BookCard key={book.id} bookData={book} />
        ))}
      </div>



    </div>
  )
}

export default Search