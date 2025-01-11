import { Link } from 'react-router-dom';
import '../styles.css'


function Book(props){
   
    return(
        <div className="bookcard">
            <img src={props.data.cover_image} alt="book cover"  height="280px" width="220px"/>
            <h3 className='booktitle'>{props.data.title}</h3>
            <div className='bookdata'>
            <p>Author : {props.data.author}</p>
            <p>Genre : {props.data.category}</p>
            <p>Description : {props.data.description}</p>
            <p>Price : {props.data.price}$</p>
            </div>
            <Link to={`/bookdetails/${props.data.id}`}><button className='viewbook'>View Book</button> </Link>
            
        </div>
    )
}

export default Book;