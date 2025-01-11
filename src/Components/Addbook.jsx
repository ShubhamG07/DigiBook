import '../styles.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addBook } from '../utils/bookSlice';
import { useState } from 'react';


const categories=[
"Fiction",
"Thriller",
"Non-fiction",
"Self-help",
"Mystery",
"Crime",
"History",
"Literary Fiction",
"Classics",
"Fantasy"
];


function Addbook(){
    const[book,setBook]=useState(
        {
            "title":'',
            "author":'',
            "description":'',
            "price":'',
            "category":'',
            image:null,
            "rating":0
        }
    );


    const[successMsg,setSuccessMsg]=useState("");

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
      };

      const handleImage = (e) => {
        const file = e.target.files[0];
        setBook({ ...book, image: file });
      };
 

      const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
          ...book,
          "id": Date.now(),
          "cover_image":book.image ? URL.createObjectURL(book.image) : null ,
          "category": book.category,
    
        };
      
        dispatch(addBook(formData));
    
        setBook({
          "title": '',
          "author": '',
          "description": '',
          "price": '',
          "category": '',
          image: null,
          "rating": 0,
        });
    
        e.target.reset();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    
        setSuccessMsg('Book added successfully! Redirecting to Browse Books page...');
        setTimeout(() => {
          setSuccessMsg('');
          navigate('/browsebook');
        },3000);

        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
          },4000);
      };


    return(
        <>
        <div>
            {successMsg && <p className="success">{successMsg}</p>}
        </div>
        <div className='formpage'>
         <div className="formcontainer">
            <h2>Add a Book</h2>
            <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Title' name='title' value={book.title} onChange={handleChange} required  />
            <input type="text" placeholder='Author' name='author' value={book.author} onChange={handleChange} required/>
            <input type="text" placeholder='Description' name='description' value={book.description} onChange={handleChange} required />
            <input type="number" placeholder='Price' name='price' value={book.price} onChange={handleChange} required />

             {/* Dropdown for Categories */}
        <div className="categorydropdown">
          <label htmlFor="categoryselect">Category:</label>
          <select
            id="categoryselect"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div >
          <label htmlFor="image-upload">Upload Image:</label>
          <input 
            id="image-upload" 
            type="file" 
            accept="image/*" 
            onChange={handleImage} 
            required 
          />
        </div>

        <div className="rating">
          <label>Rating :</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= book.rating ? 'active' : ''}`}
                onClick={() => setBook({ ...book, rating: star })}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button className='submitformbutton' type="submit">Add Book</button>
            </form>

            </div>   
        </div>
        </>
    )

}

export default Addbook;