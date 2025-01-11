import '../styles.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Booklist(){
    const books=useSelector((state)=>state.book.books);
    const popularBooks=books.filter(book=>book.rating>4.5);    
    return(
        <>
        <h2 className='welcomemsg'>Welcome to Online Library</h2>
        <h3 className='categories'>Book Categories :</h3>
        <div className="categorybutton">
        <Link to="/books/Fiction"><button >Fiction</button> </Link>
        <Link to="/books/Thriller"> <button >Thriller</button> </Link>
        <Link to="/books/Non-fiction"> <button >Non-fiction</button></Link>
        <Link to="/books/Self-help"><button >Self-help</button> </Link>
        <Link to="/books/Mystery"><button >Mystery</button> </Link>
        <Link to="/books/Crime"> <button >Crime</button></Link>
        <Link to="/books/History"> <button >History</button></Link>
        <Link to="/books/Literary Fiction"><button >Literary Fiction</button> </Link>
        <Link to="/books/Classics"><button >Classics</button> </Link>
        <Link to="/books/Fantasy"><button >Fantasy</button> </Link>
        </div>
        
        <h2 className='popularbooks'>Popular Books</h2>
        <div className='bookContainer'>
        { popularBooks.map((book)=>(
            <Book key={book.id} data={book} />
        ))}

        </div>
        </>
    )
}

export default Booklist;