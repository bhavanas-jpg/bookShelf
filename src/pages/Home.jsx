import React from 'react'
import { useBooks } from '../context/BookContext';
import Shelve from '../components/Shelve';

const Home = () => {
const {categoryList} = useBooks();


  return (
    <div>
      {
        categoryList.map((data)=>(
          <div key={data}>
             <Shelve category={data} />
            </div>      
        ))
      }
    </div>
  )
}

export default Home